const $=id=>document.getElementById(id);
// Match the YouTube embed origin to whichever host serves this invitation.
const songURL=new URL($('wedding-song').src);
songURL.searchParams.set('origin',window.location.origin);
$('wedding-song').src=songURL.toString();
const target=new Date('2026-10-15T19:00:00+03:00').getTime();
function countdown(){const n=Math.max(0,Math.floor((target-Date.now())/1000));[Math.floor(n/86400),Math.floor(n/3600)%24,Math.floor(n/60)%60,n%60].forEach((v,i)=>$(['days','hours','minutes','seconds'][i]).textContent=v.toLocaleString('en-US',{minimumIntegerDigits:2,useGrouping:false}));if(!n)$('count-note').textContent=Date.now()<target+86400000?'أطلّ يوم فرحتنا!':'بداية عمرٍ جميل · 15 أكتوبر 2026';}countdown();setInterval(countdown,1000);
let opened=false,openTimer;
function reveal(){if(opened)return;opened=true;clearTimeout(openTimer);$('cover').classList.add('opened');$('invitation').inert=false;document.querySelector('.topbar a').focus({preventScroll:true});setTimeout(()=>$('cover').hidden=true,1100);}
$('open').onclick=()=>{startWeddingSong();if(matchMedia('(prefers-reduced-motion: reduce)').matches){reveal();return;}$('cover').classList.add('playing');openTimer=setTimeout(reveal,1000);};$('skip').onclick=reveal;
$('calendar').onclick=()=>{const ics=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Ahmed and Alaa//Wedding//EN','BEGIN:VEVENT','UID:ahmed-alaa-20261015@invitation','DTSTAMP:20261007T064900Z','DTSTART:20261015T160000Z','SEQUENCE:2','SUMMARY:حفل زفاف Ahmed & Alaa','LOCATION:جدة — المملكة العربية السعودية','DESCRIPTION:حفل زفافنا. يبدأ الحفل الساعة 19:00 (7 مساءً) بتوقيت جدة. موقع الحفل: https://maps.app.goo.gl/ZxjBBrqev6dUgCSd7','END:VEVENT','END:VCALENDAR'].join('\r\n');const u=URL.createObjectURL(new Blob([ics],{type:'text/calendar;charset=utf-8'}));const a=document.createElement('a');a.href=u;a.download='Ahmed-and-Alaa-Wedding.ics';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);};
// Prepare the official YouTube player before the invitation-opening gesture.
let weddingPlayer, songReady=false, songRequested=false;
function playWeddingSong(){
 if(!songReady)return;
 weddingPlayer.setVolume(100);
 weddingPlayer.unMute();
 weddingPlayer.seekTo(40,true);
 weddingPlayer.playVideo();
}
function startWeddingSong(){songRequested=true;playWeddingSong();}
function retryWeddingSong(){if(songRequested&&songReady)weddingPlayer.playVideo();}
window.onYouTubeIframeAPIReady=()=>{
 weddingPlayer=new YT.Player('wedding-song',{
  events:{
   onReady:()=>{songReady=true;if(songRequested)playWeddingSong();},
   onStateChange:event=>{
    if(event.data===YT.PlayerState.ENDED&&songRequested){weddingPlayer.seekTo(40,true);weddingPlayer.playVideo();}
    if(event.data===YT.PlayerState.PLAYING)document.removeEventListener('pointerdown',retryWeddingSong);
   },
   onAutoplayBlocked:()=>{document.addEventListener('pointerdown',retryWeddingSong,{once:true});}
  }
 });
};
const youtubeAPI=document.createElement('script');
youtubeAPI.src='https://www.youtube.com/iframe_api';
youtubeAPI.onerror=()=>{};
document.head.appendChild(youtubeAPI);

