# AMG Lab Website — Project Notes

## What this is
A static HTML/CSS/JS website for the AI in Medicine & Genomics Lab at NYU, led by Eran Halperin.
It replaces the previous Wix site at eranhalperingenomics.com.

## Live site
- **URL:** https://eranhalperingenomics.com
- **GitHub repo:** https://github.com/eran-halperin/eranhalperingenomics-website
- **Hosting:** GitHub Pages (free), serving from the `main` branch

## Where we left off
- The site is fully built and live at eranhalperingenomics.com via GitHub Pages
- DNS was updated in Wix to point to GitHub's servers (A records + CNAME)
- HTTPS is enforced — SSL certificate issued, valid until 2026-07-15
- Mobile layout fixed: removed `white-space: nowrap` from hero h1, added `overflow-x: hidden` to body, made logo row wrap on narrow screens, and removed fixed height/scroll from publications panel on mobile
- The old Wix site still exists but is no longer serving the domain
- **Wix exit in progress — see `WIX_MIGRATION.md` for full plan/status/log.** Premium plan auto-renew turned off 2026-07-31 (avoids a $900 charge). Two open check-ins: ~Aug 17, 2026 (verify DNS survived Premium plan ending) and ~Sep 29, 2026 (ICANN transfer lock lifts, then transfer domain registration off Wix). Read `WIX_MIGRATION.md` at the start of any session touching hosting/domain/Wix topics.

## How to update the site
1. Edit `index.html` (content) or `css/style.css` (styling)
2. Run: `git add -A && git commit -m "describe change" && git push`
3. Site updates in ~30 seconds

## File structure
```
index.html          ← All page content (single scrolling page)
css/style.css       ← All styling
js/main.js          ← Mobile nav + active link highlighting
images/             ← logo.png, favicon.png, HalperinLAB_edited.jpg
images/members/     ← eran-halperin.jpg, michal-sadowski.jpg, johnson_chen.jpg, ulzee-an.jpg
cvHalperin032026.pdf ← CV (linked in navbar and hero section)
CNAME               ← Tells GitHub Pages to use eranhalperingenomics.com
wix/                ← Local only (gitignored) — screenshots of Wix DNS settings for reference
```

## Key design decisions
- Single scrolling page with fixed navbar
- Hero section: left = lab info + logo + CV link, right = scrollable publications panel
- Max page width: 1400px
- Font: Source Sans 3 (Google Fonts)
- Color scheme: dark navy (#1a3a5c) and blue (#1a5fa8)
