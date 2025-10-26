# 🚀 Google Search Console Submission Guide

## ⚡ Quick Start (5 minutes)

### What You Have Ready
✅ **Sitemap:** `/public/sitemap.xml` → `https://www.devora.co.uk/sitemap.xml`  
✅ **Robots file:** `/public/robots.txt` → `https://www.devora.co.uk/robots.txt`  
✅ **21 URLs indexed** (1 homepage, 1 blog index, 12 blog posts, 5 case studies, 2 support pages)

---

## 📝 Step-by-Step Submission

### Step 1: Go to Google Search Console
```
🔗 https://search.google.com/search-console
```
- Click **Sign in** with your Google account
- If you don't have a Google account, create one first

### Step 2: Add Your Property

**Option A: If Domain is NEW**
1. Click **Create property**
2. Choose **Domain** (recommended for full domain)
3. Enter: `devora.co.uk`
4. Verify ownership via DNS TXT record
   - Copy the verification code Google provides
   - Add it to your domain registrar's DNS settings
   - Wait 24-48 hours for DNS propagation
   - Click **Verify** in GSC

**Option B: If Already Using Subdomain**
1. Click **Create property**
2. Choose **URL prefix**
3. Enter: `https://www.devora.co.uk`
4. Verify via Google Analytics (if connected) or HTML file upload

### Step 3: Submit Sitemap

Once property is verified:

1. In **left sidebar**, find **Sitemaps** (under **Indexing**)
2. Click **Add new sitemap**
3. Enter in the text field:
   ```
   sitemap.xml
   ```
   (GSC will automatically prepend your domain)
4. Click **Submit**

### Step 4: Verify Submission ✅

You should see:
- Status changes from "Pending" to "Success"
- Green checkmark appears
- Stats show:
  - Submitted URLs: 21
  - Indexed URLs: (will increase over days/weeks)
  - Errors: 0

---

## 📊 What to Expect After Submission

### Timeline
| When | What Happens |
|------|--------------|
| **Immediately** | Submission confirmed in GSC |
| **24-48 hours** | Google begins crawling |
| **1-2 weeks** | Most pages indexed |
| **2-4 weeks** | Full indexation complete |

### Monitoring Dashboard

After submission, check these sections regularly:

#### 1. **Coverage Report**
- Shows which pages are indexed
- Lists any errors or excluded pages
- Expected: All 21 URLs should be indexed

#### 2. **Performance Report**
- Impressions (how often your pages appear in search)
- Clicks (CTR)
- Average position
- Device breakdown

#### 3. **Enhancements**
- Mobile usability
- Rich results eligibility
- Core Web Vitals
- Mobile-friendly test

---

## 🔍 Testing Before Submission

### Validate Your Sitemap (Optional but Recommended)

**Online Validator:**
1. Go to: `https://www.xml-sitemaps.com/validate-xml-sitemap.html`
2. Enter: `https://www.devora.co.uk/sitemap.xml`
3. Click **Validate**
4. Should show: ✅ **Valid XML**

**In Google Search Console:**
1. Add property to GSC (step 3 above)
2. Go to **Sitemaps** section
3. Before submitting, click **Test sitemap**
4. GSC will validate and show any errors

### Test Individual URLs

1. In GSC, go to **URL inspection**
2. Enter a URL: `https://www.devora.co.uk/blog`
3. Click **Request indexing**
4. Shows:
   - ✅ Crawlable
   - ✅ Indexable
   - ✅ Mobile-friendly

---

## ✅ Pre-Submission Checklist

- [ ] Domain is registered and resolves correctly
- [ ] Website is live and accessible from internet
- [ ] No "Coming soon" pages
- [ ] `/robots.txt` is accessible at `https://www.devora.co.uk/robots.txt`
- [ ] `/sitemap.xml` is accessible at `https://www.devora.co.uk/sitemap.xml`
- [ ] All URLs in sitemap return HTTP 200 (not 404)
- [ ] Google Analytics tracking code is installed (optional but helps verification)
- [ ] SSL certificate is valid (should be https://)
- [ ] No massive redirects or loops
- [ ] Metadata and titles are unique per page

---

## 🐛 Troubleshooting

### Sitemap Submission Shows "Error"

**Common Causes & Fixes:**

1. **"Sitemap URL not accessible"**
   - Check: Is `https://www.devora.co.uk/sitemap.xml` publicly accessible?
   - Fix: Ensure sitemap.xml is in `/public` folder (automatically served)
   - Verify in browser: Paste URL directly, should see XML content

2. **"Invalid XML format"**
   - Check: Is first line `<?xml version="1.0" encoding="UTF-8"?>`?
   - Fix: Ensure no extra spaces or characters before XML declaration
   - Validate at: https://www.xml-sitemaps.com/validate-xml-sitemap.html

3. **"URLs not accessible" or "404 errors"**
   - Check: All URLs in sitemap actually return 200 status
   - Test: Click individual URLs from GSC's coverage report
   - Common issue: URLs use `https://www.devora.co.uk` but site redirects or has different domain

4. **"Property not verified"**
   - Solution: Verify ownership first before submitting sitemap
   - Follow Step 2 above for verification

### No Indexation After 2 Weeks

**Possible Reasons:**
- Homepage has `noindex` meta tag (check in page source)
- robots.txt is blocking search engines (should allow `/`)
- Content is too thin (fewer than 300 words per page)
- Site has been penalised (check GSC "Manual Actions")

**Fixes:**
- Audit metadata in `app/layout.tsx`
- Ensure robots.txt allows crawling
- Verify content quality and uniqueness
- Check GSC for any warnings or penalties

---

## 📱 Also Submit To:

### Bing Webmaster Tools
1. Go to: `https://www.bing.com/webmasters`
2. Add your sitemap: `https://www.devora.co.uk/sitemap.xml`
3. Same process as Google

### Yandex (if targeting Russia/CIS)
1. Go to: `https://webmaster.yandex.com/`
2. Add property and submit sitemap

---

## 📈 After First Month

### What to Review
- [ ] Check Coverage Report—any errors?
- [ ] Review Performance—getting impressions?
- [ ] Check Core Web Vitals—passing?
- [ ] Look at Mobile Usability—any issues?
- [ ] Check keyword rankings (use SEMrush/Ahrefs)

### Action Items
- [ ] Fix any crawl errors (should be zero)
- [ ] Improve pages with low CTR
- [ ] Add internal links to low-traffic pages
- [ ] Create more content (blog posts) to boost traffic

---

## 💡 Pro Tips

1. **Update Regularly:** Add new blog posts to sitemap within 24 hours
2. **Monitor Crawl Errors:** Check weekly for any new issues
3. **Track Rankings:** Use Google Search Console's Performance report
4. **Request Indexation:** For new important pages, use "URL Inspection" → "Request Indexing"
5. **Check Mobile Usability:** Ensure all pages pass mobile-friendly test

---

## 📞 Need Help?

If you encounter issues:

1. **Google's Official Help:** https://support.google.com/webmasters
2. **Search this doc:** Ctrl+F to find your error
3. **Validate sitemap:** https://www.xml-sitemaps.com/validate-xml-sitemap.html
4. **Test URL accessibility:** https://www.url-checker.com/

---

## ✨ Summary

| Item | Details |
|------|---------|
| **Files Created** | sitemap.xml, robots.txt |
| **Total URLs** | 21 |
| **Priority URL** | Homepage (1.0) |
| **Next Step** | Submit to Google Search Console |
| **Timeframe** | 2-4 weeks for full indexation |
| **Maintenance** | Update when adding new content |

---

**Created:** 26 October 2025  
**Status:** ✅ Ready to submit immediately  
**Domain:** devora.co.uk  
**Sitemap:** https://www.devora.co.uk/sitemap.xml

