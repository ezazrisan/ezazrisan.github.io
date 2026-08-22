# FerraSites — Niche Site Portfolio

A static portfolio site for a niche-site developer: WordPress builds, on-page SEO,
Pinterest traffic growth, and monetization (AdSense / Mediavine / Amazon Associates).

## What's in here

```
index.html                     → homepage
style.css                      → all styling
script.js                      → scroll reveals, count-up stats, ticker
projects/
  site-01-sold/index.html      → case study — sold on Motion Invest
  site-02-sold/index.html      → case study — sold on Motion Invest
  site-03-sold/index.html      → case study — sold on Motion Invest
  site-04-ongoing/index.html   → case study — currently growing (self-owned)
  client-01/index.html         → case study — client project
  client-02/index.html         → case study — client project
```

Everything is plain HTML/CSS/JS — no build step, no framework, no dependencies to install.

## 1. Replace the placeholder content

Every placeholder is marked with the word **REPLACE** in the HTML, plus a yellow
"Placeholder notice" box at the top of each page as a reminder. Open each file and:

- Swap REPLACE fields (niches, dates, numbers, links) for your real project details
- Update the email address in the two `mailto:REPLACE@example.com` links
- Add your real Fiverr/Upwork link in place of the `#` placeholder in the CTA button
- Add a real client quote in the testimonial section on `index.html`

To add more of your 20+ projects to the "Other client projects" grid, copy one
`.summary-card` block in `index.html` and edit the text.

To add more full case study pages, duplicate one of the `projects/` folders,
rename it, and link a new card to it from `index.html`.

## 2. Add your real screenshots

Right now every project card and case study page shows an animated placeholder
frame (a browser mockup with a subtly scrolling pattern) instead of a real
screenshot — this keeps the site fast with zero loading risk.

To swap in a real preview:

1. Take a full-page screenshot of the live site (a browser extension like
   "GoFullPage" works well for Chrome).
2. Save it into an `assets/` folder (already created for you) as, e.g.,
   `assets/site-01.jpg`.
3. In the relevant `.frame-scroll` element, replace the empty `<div class="frame-scroll"></div>`
   with:
   ```html
   <div class="frame-scroll" style="background-image:url('../../assets/site-01.jpg'); background-size:100% auto; background-position:top;"></div>
   ```
   On the homepage cards, the path is `assets/site-01.jpg` (no `../../`).

The existing scroll animation will keep working automatically, now with your
real screenshot instead of the placeholder pattern.

## 3. Deploy to GitHub Pages

1. Create a new repository on GitHub (public).
2. Push everything in this folder to the repo root:
   ```bash
   git init
   git add .
   git commit -m "Launch portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source → Deploy from a branch → main → / (root)**.
4. Your site goes live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

If you want it at the root of `YOUR-USERNAME.github.io` (no repo name in the
URL), name the repository exactly `YOUR-USERNAME.github.io`.

## 4. Optional next steps

- Custom domain: add a `CNAME` file with your domain, then point your domain's
  DNS to GitHub Pages (GitHub's docs walk through this under Pages settings).
- Favicon: drop a `favicon.ico` in the root and add
  `<link rel="icon" href="/favicon.ico">` to each page's `<head>`.
