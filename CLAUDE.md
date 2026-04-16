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
- HTTPS is not yet enforced — the SSL certificate was still being provisioned at end of session
  - Once ready, run: `gh api repos/eran-halperin/eranhalperingenomics-website/pages --method PUT --input - <<'EOF'
{"https_enforced":true}
EOF`
- The domain is registered through Wix — decision pending on whether to transfer to Namecheap or keep with Wix (~$15/year either way)
- The old Wix site still exists but is no longer serving the domain

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
