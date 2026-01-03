# 🚀 SEO Quick Start Guide

## Immediate Actions (Do This Now!)

### 1. Google Search Console Setup (15 minutes)

#### Step 1: Sign Up & Add Property
```
1. Go to: https://search.google.com/search-console
2. Click "Start Now" and sign in
3. Click "+ Add Property"
4. ⭐ Choose "Domain" (RECOMMENDED)
5. Enter: imantha.dev (without https:// or www)
```

**Why Domain property?**
- ✅ Tracks ALL your articles, projects, and pages
- ✅ Covers www and non-www versions
- ✅ Better for SEO of all content
- ✅ Future-proof

#### Step 2: DNS Verification (Required for Domain Property)

Google will show: `google-site-verification=abc123xyz...`

**⭐ If using Vercel (Most common):**
```
1. Open Vercel Dashboard
2. Go to Your Project → Settings → Domains
3. Click on "imantha.dev"
4. Scroll to "DNS Records" or "Add Record"
5. Add:
   - Type: TXT
   - Name: @ (or leave empty)
   - Value: google-site-verification=abc123xyz...
6. Click Save
7. Wait 5 minutes
8. Go back to Google Search Console
9. Click "Verify"
```

**⭐ If using Cloudflare:**
```
1. Go to Cloudflare Dashboard
2. Select your domain: imantha.dev
3. Click "DNS" tab
4. Click "Add record"
5. Enter:
   - Type: TXT
   - Name: @ (or imantha.dev)
   - Content: google-site-verification=abc123xyz...
6. Click "Save"
7. Wait 5 minutes
8. Go back to Google Search Console
9. Click "Verify"
```

**Alternative: URL Prefix Method** (If you can't access DNS)
```
1. Choose "URL prefix" instead
2. Enter: https://www.imantha.dev
3. Use Meta Tag verification:
   - Copy the verification code
   - Add to app/layout.tsx:
     verification: {
       google: 'YOUR_CODE',
     }
   - Deploy and verify
⚠️ Note: Only tracks www version, not all content
```

#### Step 3: Submit Sitemap
```
1. In Search Console, go to "Sitemaps"
2. Enter: sitemap.xml
3. Click "Submit"
```

#### Step 4: Request Indexing
```
1. Go to "URL Inspection"
2. Enter: https://www.imantha.dev
3. Click "Request Indexing"
4. Wait for confirmation
```

---

### 2. Bing Webmaster Tools (5 minutes)

```
1. Go to: https://www.bing.com/webmasters
2. Sign in with Microsoft account
3. Click "Add Site"
4. Enter: https://www.imantha.dev
5. Import from Google Search Console (easiest!)
   OR verify manually
6. Submit sitemap: sitemap.xml
```

---

### 3. Social Media Updates (10 minutes)

#### LinkedIn
```
1. Edit profile
2. Add to "Contact Info" → Website:
   https://www.imantha.dev
3. Create a post announcing your portfolio
```

#### GitHub
```
1. Go to your profile: github.com/a-Imantha
2. Edit profile
3. Add website: https://www.imantha.dev
4. Update bio with link
```

#### Optional - Create Post
Share on LinkedIn:
```
🚀 Excited to share my portfolio showcasing my work in ML Engineering!

Building production ML systems at scale, specializing in:
• MLOps & Cloud Architecture
• LLM Fine-tuning
• Kubernetes & AWS
• Full-stack Development

Check it out: https://www.imantha.dev

#MachineLearning #MLOps #AI #CloudComputing
```

---

### 4. Verify Your Improvements (2 minutes)

Check that everything is working:

#### Favicon Test
```
Open in browser: https://www.imantha.dev
Check browser tab for icon ✅
```

#### Structured Data Test
```
1. Go to: https://search.google.com/test/rich-results
2. Enter: https://www.imantha.dev
3. Click "Test URL"
4. Should show "Person" schema ✅
```

#### Mobile-Friendly Test
```
1. Go to: https://search.google.com/test/mobile-friendly
2. Enter: https://www.imantha.dev
3. Should pass ✅
```

#### PageSpeed Test
```
1. Go to: https://pagespeed.web.dev/
2. Enter: https://www.imantha.dev
3. Check scores (aim for 90+) ✅
```

---

### 5. Track Indexing Progress

Check if your site is indexed:

#### Google Search
```
Type in Google: site:imantha.dev
```

**Week 1**: May show 0-2 pages  
**Week 2-3**: Should show 10-20 pages  
**Week 4+**: Should show most pages  

---

## 📊 What to Monitor

### Daily (First Week)
- [ ] Check Google Search Console for errors
- [ ] Look for indexing updates

### Weekly
- [ ] Check "site:imantha.dev" in Google
- [ ] Review Search Console impressions
- [ ] Check for crawl errors

### Monthly
- [ ] Analyze search queries bringing traffic
- [ ] Review page rankings
- [ ] Update content if needed

---

## ⏱️ Expected Timeline

| Timeframe | What to Expect |
|-----------|----------------|
| **Day 1** | Sitemap submitted ✅ |
| **Day 2-3** | First crawl by Google 🔍 |
| **Week 1** | Homepage indexed 📝 |
| **Week 2-3** | Most pages indexed 📚 |
| **Month 1** | Ranking for name searches 📈 |
| **Month 2-3** | Ranking for skill keywords 🎯 |

---

## 🎯 Success Metrics

After 1 month, you should see:
- ✅ 30-50+ pages indexed
- ✅ 100+ impressions per week
- ✅ Ranking #1 for "Imantha Ahangama"
- ✅ Appearing for "ML Engineer Sri Lanka"
- ✅ Rich snippet with photo in results

---

## ⚠️ Common Issues

### Favicon Not Showing in Search?
**Solution**: This is normal! Google caches favicons. It can take 2-4 weeks to update.

### Site Not Indexed After 1 Week?
**Solution**:
1. Check robots.txt: https://www.imantha.dev/robots.txt
2. Verify sitemap: https://www.imantha.dev/sitemap.xml
3. Manually request indexing in Search Console
4. Check for crawl errors in Search Console

### Low Impressions?
**Solution**:
1. Share on social media (LinkedIn, Twitter)
2. Add link from GitHub profile
3. Link from other websites you control
4. Give it 2-3 months to build authority

---

## 📞 Need Help?

- Google Search Console Help: https://support.google.com/webmasters
- Questions? Check `SEO_GUIDE.md` for detailed info

---

## ✅ Completion Checklist

- [ ] Google Search Console verified
- [ ] Sitemap submitted to Google
- [ ] Requested indexing for homepage
- [ ] Bing Webmaster Tools setup
- [ ] LinkedIn profile updated with website
- [ ] GitHub profile updated with website
- [ ] Tested favicon display
- [ ] Verified structured data
- [ ] Checked mobile-friendliness
- [ ] Shared on LinkedIn

**Once completed, your portfolio will be discoverable in Google within 1-2 weeks!** 🎉

