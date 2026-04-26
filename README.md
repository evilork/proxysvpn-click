# proxysvpn.click

Independent technical review of VPN protocols available in the Russian market in 2026.

## Pages

- `/` — main editorial review (post-quantum angle)
- `/post-quantum-vpn/` — deep technical explainer on ML-KEM 768
- `/vpn-comparison-russia-2026/` — full provider comparison with methodology
- `/faq/` — 14 questions, structured for FAQPage rich snippets
- `/404.html` — error page

## Technical

- Static HTML, zero JS dependencies, single shared `styles.css`
- Three Google Fonts (Instrument Serif, DM Sans, JetBrains Mono)
- JSON-LD on every page (Article, Review, FAQPage, BreadcrumbList, Organization)
- Reading progress bar, scroll-reveal animations
- Open Graph + Twitter Card with custom 1200x630 OG image
- Sitemap with image extension

## Local preview

```bash
cd proxysvpn-click
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy on GitHub Pages

```bash
# 1. Create new public repo on GitHub: proxysvpn-click
# 2. Push files
cd proxysvpn-click
git init
git add .
git commit -m "init: editorial landing page with 4 pages"
git branch -M main
git remote add origin https://github.com/evilork/proxysvpn-click.git
git push -u origin main

# 3. GitHub: Settings -> Pages -> Source: main / (root)
# 4. Custom domain: proxysvpn.click (CNAME file already in repo)
# 5. Enforce HTTPS: enabled
```

## DNS setup at your registrar

For apex domain (proxysvpn.click):

```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
AAAA  @     2606:50c0:8000::153
AAAA  @     2606:50c0:8001::153
AAAA  @     2606:50c0:8002::153
AAAA  @     2606:50c0:8003::153
CNAME www   evilork.github.io
```

DNS propagation 10-60 min, GitHub HTTPS provisioning another 30-60 min.

## SEO checklist

- [ ] Add to Google Search Console, verify ownership
- [ ] Add to Yandex Webmaster, verify ownership
- [ ] Add to Bing Webmaster Tools, verify ownership
- [ ] Submit `https://proxysvpn.click/sitemap.xml` to all three
- [ ] Configure IndexNow on Bing/Yandex (optional but speeds up reindex)
- [ ] Test rich results: https://search.google.com/test/rich-results?url=https://proxysvpn.click/
- [ ] Test mobile-friendly: https://search.google.com/test/mobile-friendly?url=https://proxysvpn.click/
- [ ] Verify OG image preview: https://opengraph.dev/preview?url=https://proxysvpn.click/
