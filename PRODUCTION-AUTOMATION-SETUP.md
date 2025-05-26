# Production Automation Setup Guide

Your blog automation is already configured and will work automatically in production! Here's what you need to know:

## 🚀 **Current Automation Setup**

### **Two Automation Methods:**

1. **Vercel Cron Job** (Primary)
   - Runs daily at **9:00 AM UTC**
   - Uses `/api/generate-blog` endpoint
   - Automatically deploys new content

2. **GitHub Actions** (Backup)
   - Runs daily at **8:00 AM UTC** 
   - Commits new blog posts to repository
   - Triggers Vercel deployment

## 🔧 **Required Environment Variables**

### **For Vercel (Production):**
Add these to your Vercel dashboard under Project Settings → Environment Variables:

```bash
HUGGING_FACE_API_KEY=hf_qcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
PEXELS_API_KEY=YLRyUj2390x7JcKZpDHwV6xE0EcPrmSrieU4q5rvDbAfVtFQq3mxVk7h
BLOG_GENERATION_API_KEY=your-secure-api-key-here
CRON_SECRET=your-cron-secret-here
```

### **For GitHub Actions:**
Add these to your GitHub repository under Settings → Secrets and Variables → Actions:

```bash
HUGGING_FACE_API_KEY=hf_qcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
PEXELS_API_KEY=YLRyUj2390x7JcKZpDHwV6xE0EcPrmSrieU4q5rvDbAfVtFQq3mxVk7h
BLOG_GENERATION_API_KEY=your-secure-api-key-here
```

## ✅ **Setup Steps**

### **1. Vercel Environment Variables**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Settings → Environment Variables
4. Add the variables above
5. Redeploy your project

### **2. GitHub Secrets**
1. Go to your GitHub repository
2. Settings → Secrets and Variables → Actions
3. Click "New repository secret"
4. Add each variable above

### **3. Test the Automation**
You can manually trigger the automation to test:

**GitHub Actions:**
1. Go to Actions tab in your repository
2. Select "Daily Blog Post Generation"
3. Click "Run workflow"

**Vercel Cron:**
```bash
curl -X GET "https://your-domain.com/api/generate-blog" \
  -H "Authorization: Bearer your-blog-generation-api-key"
```

## 🎯 **How It Works in Production**

### **Daily Automation Flow:**
1. **8:00 AM UTC**: GitHub Actions generates blog post
   - Creates new blog post with Pexels image
   - Commits to repository
   - Triggers Vercel deployment

2. **9:00 AM UTC**: Vercel Cron (backup)
   - Generates blog post if GitHub Actions failed
   - Uses the same Pexels integration

### **What Gets Generated:**
- ✅ Professional blog content (AI-generated)
- ✅ Professional cover image (Pexels API)
- ✅ Proper metadata and tags
- ✅ SEO-optimised content
- ✅ Automatic deployment

## 🔍 **Monitoring**

### **Check if it's working:**
1. **GitHub Actions**: Check the Actions tab for workflow runs
2. **Vercel Functions**: Check Function logs in Vercel dashboard
3. **Blog Posts**: New posts appear in `/content/blog/`
4. **Website**: New posts visible at `/blog`

### **Troubleshooting:**
- Check environment variables are set correctly
- Verify API keys are valid
- Check function logs for errors
- Ensure repository has write permissions

## 🎉 **You're All Set!**

Your automation will:
- Generate high-quality blog posts daily
- Use professional Pexels images
- Deploy automatically to production
- Require zero manual intervention

The system is robust with multiple fallbacks and will keep your blog fresh with new content every day!

## 📞 **Need Help?**

If you encounter any issues:
1. Check the GitHub Actions logs
2. Check Vercel Function logs
3. Verify all environment variables are set
4. Test manually with `yarn generate-blog` locally 