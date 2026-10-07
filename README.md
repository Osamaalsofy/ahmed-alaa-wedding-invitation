# Ahmed & Alaa — Wedding Invitation

Arabic wedding invitation for **15 October 2026 at 19:00 (7 PM), Jeddah time (UTC+3)**.

Static HTML, CSS and JavaScript. No build tools, server or API keys required.

## Launch on GitHub Pages

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select **main** and **/(root)**, then click **Save**.
4. Wait for GitHub to show the published website link.

All paths work under a GitHub Pages project URL. The `.nojekyll` file ensures static assets are served directly.

## Edit the invitation

- `index.html`: names, Arabic text, venue link and visible date/time.
- `style.css`: responsive design, typography and colors.
- `app.js`: countdown, calendar download and music.
- `assets/`: artwork and swan video.

The countdown target is `2026-10-15T19:00:00+03:00`.
The calendar begins at `20261015T160000Z`, equivalent to 19:00 in Jeddah.
The requested YouTube soundtrack starts at 00:40 after the invitation-opening click. Browser autoplay restrictions, device volume, or YouTube embed availability can affect playback.

## Preview locally

Run `python3 -m http.server 8000` in the repository and visit `http://localhost:8000`.

## Asset sources

Invitation artwork and swan video originate from the user-supplied Sacred Garden reference at https://webgencyinvitations.com/thesacredgarden. The soundtrack is embedded from the user-selected YouTube video, https://www.youtube.com/watch?v=tzBs6i9eAE4. Confirm the relevant asset reuse permissions before commercial redistribution.
