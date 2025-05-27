# 🔧 Automated Blog Posting Troubleshooting Guide

## 🚨 **Current Issues Identified**

### **1. GitHub Actions Reliability**
- **Problem**: GitHub Actions scheduled workflows can be delayed or skipped during high-load periods
- **Impact**: Blog posts may not be generated at the scheduled time
- **Solution**: Changed schedule from `0 8 * * *` to `15 8 * * *` to avoid peak times

### **2. Hugging Face API Issues**
- **Problem**: API returning "Not Found" errors
- **Impact**: AI content generation fails, but fallback content works
- **Solution**: Robust fallback system already in place

### **3. Repository Activity Requirements**
- **Problem**: GitHub may disable scheduled workflows in inactive repositories
- **Impact**: Workflows stop running automatically
- **Solution**: Regular commits and manual triggers maintain activity

## ✅ **Solutions Implemented**

### **1. Updated Schedules**
- **GitHub Actions**: Now runs at `8:15 AM UTC` (avoiding peak load)
- **Vercel Cron**: Now runs at `9:25 AM UTC` (backup system)

### **2. Improved Error Handling**
- Robust fallback content generation when AI APIs fail
- Multiple image sources (Pexels, Lorem Picsum, SVG fallback)
- Comprehensive error logging

### **3. Dual Automation System**
- **Primary**: GitHub Actions (commits to repository)
- **Backup**: Vercel Cron (direct API generation)

## 🔍 **How to Monitor the System**

### **Check GitHub Actions**
1. Go to your repository on GitHub
2. Click the "Actions" tab
3. Look for "Daily Blog Post Generation" workflows
4. Check if they're running daily and successfully

### **Check Vercel Functions**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to "Functions" tab
4. Check logs for `/api/generate-blog` endpoint

### **Check Blog Posts**
1. Look in `content/blog/` directory for new files
2. Check timestamps: `ls -la content/blog/`
3. Verify new posts appear on your website at `/blog`

## 🛠️ **Manual Testing Commands**

### **Test Locally**
```bash
# Test blog generation script
node scripts/generate-blog-post.js

# Check if new blog post was created
ls -la content/blog/ | tail -5
```

### **Test Vercel API**
```bash
# Test the API endpoint (replace with your domain)
curl -X GET "https://your-domain.com/api/generate-blog" \
  -H "Authorization: Bearer your-blog-generation-api-key"
```

### **Manual GitHub Actions Trigger**
1. Go to GitHub repository
2. Actions tab → "Daily Blog Post Generation"
3. Click "Run workflow" button

## 🔧 **Environment Variables Checklist**

### **Required for GitHub Actions**
- `HUGGING_FACE_API_KEY` ✅
- `PEXELS_API_KEY` ✅
- `BLOG_GENERATION_API_KEY` ✅

### **Required for Vercel**
- `HUGGING_FACE_API_KEY` ✅
- `PEXELS_API_KEY` ✅
- `BLOG_GENERATION_API_KEY` ✅
- `CRON_SECRET` (optional, for security)

## 📊 **Expected Behaviour**

### **Daily Schedule**
- **8:15 AM UTC**: GitHub Actions attempts to generate blog post
- **9:25 AM UTC**: Vercel Cron runs as backup (if GitHub Actions failed)

### **Success Indicators**
- New `.md` file in `content/blog/` directory
- New blog post visible on website
- Professional cover image from Pexels
- Proper metadata and tags

### **Fallback Behaviour**
- If Hugging Face API fails → Uses template content
- If Pexels fails → Uses Lorem Picsum or SVG fallback
- If GitHub Actions fails → Vercel Cron takes over

## 🚀 **Quick Fixes**

### **If No Blog Post Today**
1. **Check GitHub Actions**: Look for failed workflows
2. **Manual Trigger**: Run GitHub Actions manually
3. **Test API**: Call Vercel endpoint directly
4. **Local Generation**: Run script locally and commit

### **If Images Not Loading**
1. **Check Pexels API**: Verify API key is valid
2. **Check File Paths**: Ensure images are in `public/blog/`
3. **Fallback Images**: System should use Lorem Picsum if Pexels fails

### **If Content Quality Issues**
1. **Hugging Face API**: Check if API key is working
2. **Fallback Content**: System uses template content if AI fails
3. **Manual Review**: Edit generated content if needed

## 📞 **Emergency Procedures**

### **If Automation Completely Fails**
1. **Generate Manually**: Run `node scripts/generate-blog-post.js`
2. **Commit Changes**: Push new blog post to repository
3. **Check Environment Variables**: Verify all API keys are set
4. **Contact Support**: Check GitHub Actions and Vercel status pages

### **If API Keys Stop Working**
1. **Regenerate Keys**: Get new API keys from providers
2. **Update Secrets**: Add new keys to GitHub and Vercel
3. **Test Immediately**: Run manual generation to verify

## 📈 **Performance Monitoring**

### **Weekly Checks**
- [ ] Verify 7 new blog posts were created
- [ ] Check all images are loading properly
- [ ] Review content quality
- [ ] Monitor API usage limits

### **Monthly Reviews**
- [ ] Analyse blog post engagement
- [ ] Review and update blog topics list
- [ ] Check API key expiration dates
- [ ] Update automation if needed

## 🎯 **Success Metrics**

- **Reliability**: 95%+ successful daily generation
- **Content Quality**: Professional, relevant content
- **Image Quality**: High-resolution, relevant images
- **SEO Optimisation**: Proper metadata and tags
- **Zero Manual Intervention**: Fully automated process

---

**Last Updated**: May 27, 2025
**Status**: ✅ Active and Monitored 