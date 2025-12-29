# Vercel Deployment Checklist

Quick reference for deploying to Vercel with continuous deployment.

## ✅ Pre-Deployment

- [ ] Code passes all quality checks (`make preflight`)
- [ ] All changes committed and pushed to GitHub
- [ ] Repository is public or you have Vercel Pro for private repos

## 🔧 Initial Setup

### 1. Vercel Account & Project
- [ ] Created Vercel account at [vercel.com](https://vercel.com)
- [ ] Imported repository to Vercel
- [ ] First deployment successful

### 2. Get Credentials
- [ ] Created Vercel token: [Account Settings → Tokens](https://vercel.com/account/tokens)
- [ ] Got `VERCEL_ORG_ID` (run `vercel project ls` or check project settings)
- [ ] Got `VERCEL_PROJECT_ID` (same as above)

### 3. GitHub Secrets
Go to: `Repository Settings → Secrets and variables → Actions`

Add these secrets:
- [ ] `VERCEL_TOKEN` - Your Vercel access token
- [ ] `VERCEL_ORG_ID` - Your Vercel organization ID
- [ ] `VERCEL_PROJECT_ID` - Your project ID
- [ ] `MEDIUM_RSS_URL` (optional) - Your Medium RSS feed URL

### 4. GitHub Actions Permissions
Go to: `Repository Settings → Actions → General`

- [ ] Set "Workflow permissions" to **"Read and write permissions"**
- [ ] Enable **"Allow GitHub Actions to create and approve pull requests"**

## 🚀 Deployment Workflow

### Automatic Deployments

**Production (main branch):**
```bash
git push origin main
# ✓ Quality checks run
# ✓ Builds and deploys to production
# ✓ Live at your-site.vercel.app
```

**Preview (pull requests):**
```bash
git checkout -b feature-branch
git push origin feature-branch
# Create PR on GitHub
# ✓ Quality checks run
# ✓ Creates preview deployment
# ✓ Comments preview URL on PR
```

### Manual Verification

Check deployment status:
- [ ] GitHub Actions tab shows successful workflow
- [ ] Vercel dashboard shows deployment
- [ ] Site is accessible and working

## 🔍 Post-Deployment

- [ ] Site loads correctly
- [ ] All sections render properly
- [ ] Images load (check Network tab)
- [ ] Navigation works
- [ ] Projects, tech stack, achievements display
- [ ] Medium RSS imports (if configured)
- [ ] Mobile responsive design works

## 🎨 Optional Enhancements

- [ ] Custom domain configured in Vercel
- [ ] Analytics enabled in Vercel dashboard
- [ ] Performance monitoring enabled
- [ ] SEO metadata verified

## 🐛 Troubleshooting

### Build Fails
1. Check GitHub Actions logs
2. Run `make preflight` locally
3. Fix issues and push again

### Secrets Not Working
1. Verify all secrets are added in GitHub
2. Check secret names match exactly
3. Re-create secrets if needed

### Preview Not Deploying
1. Check GitHub Actions permissions
2. Verify `VERCEL_TOKEN` has correct scope
3. Close and reopen PR to trigger workflow

## 📚 Quick Commands

```bash
# Test locally before deploying
make preflight

# Test production build
make build
make start

# View Vercel logs
vercel logs

# List deployments
vercel ls

# Rollback to previous deployment (in Vercel dashboard)
```

## 🆘 Need Help?

- 📖 [Full Deployment Guide](../DEPLOYMENT.md)
- 🔗 [Vercel Documentation](https://vercel.com/docs)
- 💬 [Vercel Discord](https://vercel.com/discord)
- 📧 Contact: imantha.ahangama@gmail.com

---

**Last Updated:** December 2025

