# ✅ SUBMISSION CHECKLIST - Google Search Console

## 🎯 Pre-Submission (Do These First)

- [ ] Verify sitemap is publicly accessible
  - [ ] Open `https://www.devora.co.uk/sitemap.xml` in browser
  - [ ] Should see XML content (not 404 error)

- [ ] Verify robots.txt is accessible
  - [ ] Open `https://www.devora.co.uk/robots.txt` in browser
  - [ ] Should see text content

- [ ] Ensure domain is live
  - [ ] Visit `https://www.devora.co.uk/` in browser
  - [ ] Site should load normally (not "Coming Soon")

- [ ] Check SSL certificate
  - [ ] URLs should be `https://` not `http://`
  - [ ] Padlock should appear in browser

---

## 🚀 Submission Steps

### 1. Go to Google Search Console
- [ ] Open: https://search.google.com/search-console
- [ ] Sign in with your Google account
- [ ] (Create account if needed)

### 2. Add Your Domain Property
- [ ] Click "Create property" or "+" button
- [ ] Choose property type:
  - **Recommended:** Domain (covers all versions)
  - **Alternative:** URL prefix (if only www. version)
- [ ] Enter: `devora.co.uk` OR `https://www.devora.co.uk`
- [ ] Click "Continue"

### 3. Verify Ownership
Choose one verification method:

**Option A: DNS Record (Recommended)**
- [ ] Google gives you a TXT record
- [ ] Copy the TXT record code
- [ ] Go to your domain registrar (Namecheap, GoDaddy, etc.)
- [ ] Add TXT record to DNS settings
- [ ] Wait 24-48 hours for DNS propagation
- [ ] Return to GSC and click "Verify"

**Option B: Google Analytics**
- [ ] If you have Google Analytics connected to domain
- [ ] GSC will auto-verify
- [ ] Skip this step if not applicable

**Option C: HTML File Upload**
- [ ] Download HTML verification file
- [ ] Upload to `/public/` folder as `google[codes].html`
- [ ] Click "Verify"

### 4. Verify Successfully ✅
- [ ] You should see: "Verification successful"
- [ ] Property is now added to your GSC

### 5. Submit Sitemap
- [ ] In left sidebar, find "Sitemaps" (under "Indexing")
- [ ] Click "Add/Test Sitemap" or "Add new sitemap"
- [ ] Enter ONLY: `sitemap.xml`
  - GSC auto-prepends your domain
- [ ] Click "Submit"
- [ ] Wait for page to refresh

### 6. Confirm Submission ✅
- [ ] Status should change from "Pending" to "Success"
- [ ] Green checkmark appears
- [ ] Stats show:
  - Submitted: 21
  - Indexed: (will increase over time)
  - Errors: 0
- [ ] Take a screenshot! (proof of submission)

---

## 📊 What to See After Submission

### Immediately
- [ ] Submission is recorded
- [ ] Status shows "Success"
- [ ] No error messages

### 24 Hours
- [ ] GSC shows "Crawling started"
- [ ] Some URLs may show as "Crawled"

### 1 Week
- [ ] Coverage report shows indexed URLs increasing
- [ ] Some pages may show in search results

### 2-4 Weeks
- [ ] Most/all pages indexed
- [ ] Performance data appearing
- [ ] Organic traffic starting

---

## 🔍 Post-Submission Monitoring

### Daily (First Week)
- [ ] Check GSC for crawl errors (should be 0)
- [ ] Verify no new issues appear

### Weekly
- [ ] Check Coverage report
- [ ] Spot-check a few URLs are indexed
- [ ] Look for any crawl errors

### Bi-weekly
- [ ] Monitor Performance report
- [ ] Check for impressions
- [ ] Look for keywords ranking

### Monthly
- [ ] Full Coverage report review
- [ ] Performance metrics analysis
- [ ] Core Web Vitals check
- [ ] Mobile usability check

---

## 🐛 If Something Goes Wrong

### Sitemap Shows "Error"

**Error: "Sitemap URL not accessible"**
- [ ] Verify you can open `https://www.devora.co.uk/sitemap.xml` in browser
- [ ] Ensure file is in `/public/sitemap.xml`
- [ ] Check file isn't blocked in `.gitignore`
- [ ] Restart development server if needed
- [ ] Try submitting again

**Error: "Invalid XML"**
- [ ] Check first line is `<?xml version="1.0" encoding="UTF-8"?>`
- [ ] No spaces before XML declaration
- [ ] Validate at: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- [ ] Fix errors and resubmit

**Error: "404 Not Found"**
- [ ] Some URLs in sitemap aren't accessible
- [ ] Check each URL in browser
- [ ] Remove broken URLs from sitemap
- [ ] Resubmit

### Property Won't Verify

**Can't verify domain?**
- [ ] Wait 24-48 hours for DNS propagation
- [ ] Try different verification method (HTML file)
- [ ] Check DNS records were added correctly
- [ ] Contact domain registrar support if stuck

### No Indexation After 2 Weeks

**Pages not getting indexed?**
- [ ] Check for `noindex` meta tag in page source
- [ ] Verify robots.txt allows crawling: `Allow: /`
- [ ] Ensure content is 300+ words per page
- [ ] Check for manual penalties in GSC Manual Actions
- [ ] Verify no redirect loops
- [ ] Wait longer (can take up to 4 weeks)

---

## 📋 Final Checklist

**Before Submitting:**
- [ ] Sitemap accessible at correct URL
- [ ] All 21 URLs in sitemap return 200 status
- [ ] robots.txt allows crawling
- [ ] Domain is live and accessible
- [ ] SSL certificate is valid (https://)
- [ ] No "Coming Soon" pages

**During Submission:**
- [ ] Verified domain ownership
- [ ] Entered correct sitemap URL
- [ ] Clicked Submit successfully
- [ ] Received "Success" confirmation

**After Submission:**
- [ ] Bookmarked Google Search Console
- [ ] Set reminder to check weekly
- [ ] Saved this checklist for reference
- [ ] Noted submission date

---

## 📱 Also Do: Submit to Bing

### Bing Webmaster Tools (Optional but Recommended)

- [ ] Go to: https://www.bing.com/webmasters
- [ ] Sign in with Microsoft account
- [ ] Add your site: `devora.co.uk`
- [ ] Verify ownership
- [ ] Go to Sitemaps
- [ ] Submit: `https://www.devora.co.uk/sitemap.xml`
- [ ] Wait for confirmation

**Why?** Bing crawls independently and can provide additional traffic and data.

---

## 🎯 Success Criteria

You've succeeded when:

✅ **GSC Shows:**
- Sitemap: "Success" status
- Coverage: 21 submitted URLs
- Coverage: 15+ indexed URLs (within 2 weeks)
- Errors: 0

✅ **You Can See:**
- Some pages in Google search results (week 2+)
- Performance data in GSC Performance report
- Organic traffic in Google Analytics

✅ **No Issues:**
- No crawl errors
- No indexation issues
- No blocked resources

---

## ⏱️ Timeline Summary

```
Today        → Submit to GSC (this checklist)
24-48h       → Crawling begins
1 week       → Some pages indexed
2 weeks      → Most pages indexed
3-4 weeks    → Full indexation
1-3 months   → Keywords starting to rank
3-6 months   → Significant organic traffic
```

---

## 📌 Important Notes

⚠️ **Remember:**
- Priorities are hints, not guarantees
- Google decides crawl frequency
- Sitemap doesn't guarantee ranking
- Content quality still matters most
- Rankings take time (patience!)

✅ **What sitemap DOES do:**
- Helps Google find your pages faster
- Provides clear structure
- Includes metadata (images, dates)
- Saves crawl budget
- Improves efficiency

---

## 🎉 You're Ready!

Everything is set up. Follow this checklist and you'll have your sitemap submitted in under 15 minutes.

**Next action:** Start at "🚀 Submission Steps" above.

---

**Created:** 26 October 2025  
**Status:** Ready to submit immediately  
**Estimated Time to Complete:** 10-15 minutes

