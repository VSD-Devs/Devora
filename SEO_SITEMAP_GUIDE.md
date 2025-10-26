# SEO Sitemap & Search Console Setup Guide

## 📋 Overview

Your Devora website now includes two critical SEO files that help search engines discover and index your content efficiently.

### Files Created:
1. **`/public/sitemap.xml`** - XML sitemap with all website pages
2. **`/public/robots.txt`** - Robots file directing crawlers

---

## 🗺️ Sitemap Structure

### What's Included

Your sitemap contains **21 indexed URLs**:

| Page Type | Count | Priority | Change Frequency |
|-----------|-------|----------|------------------|
| Homepage | 1 | 1.0 | Weekly |
| Blog Index | 1 | 0.9 | Daily |
| Blog Posts | 12 | 0.8 | Monthly |
| Case Studies | 5 | 0.85 | Quarterly |
| Other Pages | 2 | 0.5-0.7 | Yearly-Monthly |

### Priority Explanation

```
Priority 1.0  → Homepage (entry point, most important)
Priority 0.9  → Blog index (frequently updated content hub)
Priority 0.85 → Case studies (portfolio/social proof)
Priority 0.8  → Blog posts (content for organic search)
Priority 0.7  → Careers (secondary pages)
Priority 0.5  → Legal pages (Privacy & Terms)
```

**Note:** Priority is a hint to search engines, not a guarantee. Crawl frequency and indexation are still determined by search engine algorithms.

### Change Frequency Guide

```
daily     → Homepage, Blog index (frequently updated)
monthly   → Blog posts (updated when new posts added)
quarterly → Case studies (stable content)
yearly    → Legal pages (rarely change)
```

---

## 📱 Image Sitemap Integration

Your sitemap includes image references for:
- Blog posts (cover images)
- Case studies (project images)

This helps Google's Image Search index your visual content.

**Example:**
```xml
<image:image>
  <image:loc>https://www.devora.co.uk/blog/image.jpg</image:loc>
  <image:title>Image description</image:title>
</image:image>
```

---

## 🤖 Robots.txt Breakdown

### What We're Allowing
```
Allow: / → All content is crawlable
```

### What We're Blocking
```
Disallow: /api/          → API endpoints
Disallow: /.next/        → Build artifacts
Disallow: /*?*sort=      → Avoid duplicate filtered content
Disallow: /search?       → Search pages
```

### Crawl Delays
```
Googlebot: 1 second delay → Faster crawling (Google's infrastructure)
Bingbot: 2 second delays → Standard pace
```

---

## 🔧 How to Submit to Google Search Console

### Step 1: Access Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Select your property or add a new one

### Step 2: Verify Ownership
If adding a new property:
- Choose **Domain** property type
- Verify via DNS TXT record (recommended)
- Follow Google's verification steps

### Step 3: Submit Sitemap
1. In left sidebar, go to **Sitemaps**
2. Click **Add/Test Sitemap**
3. Enter: `https://www.devora.co.uk/sitemap.xml`
4. Click **Submit**

### Step 4: Monitor Performance
Once submitted, you can track:
- Pages indexed vs. submitted
- Crawl statistics
- Coverage errors
- Enhancement data

---

## 📊 SEO Best Practices Implemented

### ✅ Technical SEO
- [x] Valid XML sitemap format
- [x] Proper URL structure (no query parameters for static content)
- [x] Image sitemap for visual search
- [x] Last modification dates included
- [x] Change frequency specified

### ✅ Content Organization
- [x] Logical priority hierarchy
- [x] Homepage prioritised (1.0)
- [x] Regular content (blog) highly prioritised (0.9)
- [x] Supporting pages lower priority (0.5-0.7)

### ✅ Crawling Efficiency
- [x] Robots.txt prevents crawling unnecessary pages
- [x] API endpoints hidden from search
- [x] Duplicate content avoided
- [x] Crawl budget optimised

---

## 📝 Maintenance Checklist

### When Adding New Pages

**Blog Posts:**
```xml
<url>
  <loc>https://www.devora.co.uk/blog/[slug-here]</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

**Case Studies:**
```xml
<url>
  <loc>https://www.devora.co.uk/case-studies/[slug-here]</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>quarterly</changefreq>
  <priority>0.85</priority>
</url>
```

### Quarterly Tasks
- [ ] Update `<lastmod>` dates for recently modified pages
- [ ] Check Google Search Console for any crawl errors
- [ ] Review coverage report in GSC
- [ ] Verify all URLs are still accessible (200 status)
- [ ] Update change frequencies if needed

### Annually
- [ ] Audit new pages that should be added
- [ ] Remove any deprecated URLs
- [ ] Review priority distribution
- [ ] Check for any broken links

---

## 🎯 SEO Impact

### Expected Improvements
1. **Faster Indexation** - Google discovers all pages within days
2. **Better Crawl Efficiency** - Search engine respects crawl budget
3. **Improved Rankings** - Proper structure signals content quality
4. **Image Discoverability** - Blog and case study images appear in image search
5. **Analytics Clarity** - Clear distinction between pages in GSC reports

### Monitoring
Track in Google Search Console:
- **Coverage Report** - What's indexed vs. errors
- **Performance Report** - CTR, impressions by page
- **Enhancement Report** - Rich results, mobile usability

---

## 🔍 URL Structure Notes

Your sitemap uses clean, descriptive URLs:

```
Homepage       → /
Blog Index     → /blog
Blog Posts     → /blog/[slug-with-keywords]
Case Studies   → /case-studies/[slug-with-keywords]
Legal          → /privacy, /terms
Careers        → /careers
```

This structure is **SEO-friendly** because:
- Keywords in URL paths improve relevance signals
- No query parameters on static pages (prevents duplicates)
- Hierarchical structure aids crawl efficiency
- Memorable and user-friendly URLs

---

## ❓ Common Questions

### Q: Why is the homepage priority 1.0?
A: It's your primary entry point and most important page. 1.0 tells search engines this deserves highest crawling priority.

### Q: Should I update lastmod dates manually?
A: Yes, update when you make significant content changes. Don't update just to game rankings—Google tracks this.

### Q: What's the difference between sitemap and robots.txt?
A: **Sitemap** tells search engines what pages exist. **Robots.txt** tells them which pages to crawl (or not).

### Q: Why block /api/ in robots.txt?
A: API endpoints aren't meant for users or search rankings. Blocking them saves crawl budget.

### Q: How often should Google crawl?
A: Depends on Google's algorithm. Sitemaps don't force crawl frequency, but they help discovery.

---

## 🚀 Next Steps

1. ✅ **Submit to Google Search Console** (see instructions above)
2. ✅ **Submit to Bing Webmaster Tools** (similar process at `www.bing.com/webmasters`)
3. 📊 **Monitor in GSC** for 2-3 weeks after submission
4. 🔧 **Maintain regularly** using the checklist above
5. 📈 **Track rankings** using SEO tools like SEMrush or Ahrefs

---

## 📞 Support & Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [Sitemap.org Protocol](https://www.sitemaps.org/)
- [Google's SEO Starter Guide](https://developers.google.com/search/docs)

---

**Last Updated:** 26 October 2025  
**Status:** ✅ Ready for submission to Google Search Console

