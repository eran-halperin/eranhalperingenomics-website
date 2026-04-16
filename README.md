# AMG Lab Website

Static website for the AI in Medicine & Genomics Lab at NYU.
Live at: https://eranhalperingenomics.com

## Folder Structure

```
amgwebsite/
├── index.html          ← Main page (edit this for content changes)
├── CNAME               ← Custom domain (do not edit)
├── css/
│   └── style.css       ← All styling
├── js/
│   └── main.js         ← Navigation behavior
└── images/
    ├── logo.png         ← Lab logo (replace with your file)
    ├── favicon.png      ← Browser tab icon (replace with your file)
    └── members/
        ├── eran-halperin.jpg
        ├── michal-sadowski.jpg
        ├── johnson-chen.jpg
        └── ulzee-an.jpg
```

## How to Update Content

Open `index.html` in any text editor. Each section has a clear HTML comment:
- `<!-- MEMBERS -->` — add/remove team members
- `<!-- PUBLICATIONS -->` — add new papers at the top
- `<!-- NEWS -->` — add news items at the top
- `<!-- SOFTWARE -->` — add or retire tools

After editing, save the file and run:

```bash
git add index.html
git commit -m "Update: describe what changed"
git push
```

The live site updates in ~30 seconds.

## How to Add Images

Place your image files in the `images/` folder (members go in `images/members/`).
The filenames expected are listed in the folder structure above.
You can use JPG or PNG — just make sure the filename matches what's in index.html.

## Deployment (GitHub Pages)

1. Create a GitHub repository (public)
2. Push this folder to the `main` branch
3. Go to repository Settings → Pages → Source: `main` branch, root `/`
4. Add your custom domain: `eranhalperingenomics.com`

## DNS Setup (one-time)

In your domain registrar's DNS settings, add these records:

| Type  | Name | Value                 |
|-------|------|-----------------------|
| A     | @    | 185.199.108.153       |
| A     | @    | 185.199.109.153       |
| A     | @    | 185.199.110.153       |
| A     | @    | 185.199.111.153       |
| CNAME | www  | your-github-username.github.io |

GitHub will automatically provision a free SSL certificate within a few minutes.
