# 🚀 Vercel Deployment - Quick Start

Get your portfolio live in **5 minutes**!

## Step 1: Import to Vercel (2 min)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select **`imantha-portfolio`**
4. Click **"Deploy"** (use all defaults)

✅ **Your site is now live!** But we're not done yet...

## Step 2: Setup Continuous Deployment (3 min)

### Get Your Vercel Credentials

**A. Get Vercel Token:**
1. Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Click **"Create Token"**
3. Name: `github-actions`
4. Scope: `Full Account`
5. **Copy the token** (shown only once!)

**B. Get Project IDs:**

Option 1 - Via CLI (fastest):
```bash
npm install -g vercel
vercel login
cd /path/to/imantha-portfolio
vercel link
vercel project ls
```

Option 2 - Via Dashboard:
- **Org ID**: [Account Settings](https://vercel.com/account) → Your ID
- **Project ID**: Project Settings → General → Project ID

### Add Secrets to GitHub

1. Go to: **`github.com/your-username/imantha-portfolio/settings/secrets/actions`**
2. Click **"New repository secret"** for each:

```
Name: VERCEL_TOKEN
Value: [paste your token from step A]

Name: VERCEL_ORG_ID  
Value: [paste your org ID]

Name: VERCEL_PROJECT_ID
Value: [paste your project ID]

Name: MEDIUM_RSS_URL (optional)
Value: https://medium.com/feed/@yourusername
```

### Enable GitHub Actions

1. Go to: **`github.com/your-username/imantha-portfolio/settings/actions`**
2. Under "Workflow permissions":
   - ✅ Select **"Read and write permissions"**
   - ✅ Check **"Allow GitHub Actions to create and approve pull requests"**
3. Click **"Save"**

## Step 3: Test It! (1 min)

```bash
# Make a test change
echo "# Deployed!" >> README.md

# Push to trigger deployment
git add .
git commit -m "feat: enable CD to Vercel"
git push origin main
```

**Watch it deploy:**
1. Go to **Actions** tab on GitHub
2. Click on "Deploy to Vercel" workflow
3. ✅ Wait for success
4. 🎉 Visit your live site!

## 🎯 What You Get

### ✅ Production Deployments
- Push to `main` → Auto-deploys to production
- Quality checks run first (format + lint + type-check)
- Rollback anytime from Vercel dashboard

### ✅ Preview Deployments
- Create PR → Gets unique preview URL
- Comment with preview link appears automatically
- Test changes before merging

### ✅ Quality Gates
- Code formatted automatically
- ESLint validation
- TypeScript checks
- Blocks deployment if checks fail

## 🔧 Optional: Custom Domain

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. **Settings** → **Domains**
4. Add: `yourdomain.com`
5. Follow DNS instructions
6. ✅ SSL certificate auto-provisioned

## 📚 Need More Details?

- **Full Guide:** [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Checklist:** [.github/DEPLOY_CHECKLIST.md](./.github/DEPLOY_CHECKLIST.md)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)

## 🐛 Having Issues?

### Build fails?
```bash
make preflight    # Run all checks locally
make format       # Fix formatting
make lint-fix     # Fix linting
```

### Secrets not working?
- Verify secret names match exactly
- Check you're using the right token scope
- Try creating new token

### Workflow not triggering?
- Check GitHub Actions permissions
- Verify workflow file exists: `.github/workflows/deploy-vercel.yml`
- Try closing/reopening PR

## ✨ Pro Tips

1. **Always test locally first:**
   ```bash
   make preflight && make build
   ```

2. **Use preview deployments:**
   - Create branches for new features
   - Test in preview before merging

3. **Monitor deployments:**
   - GitHub Actions tab for workflow logs
   - Vercel Dashboard for deployment status

4. **Enable Analytics:**
   - Vercel Dashboard → Analytics
   - Free on all plans!

---

**Total Setup Time:** ~5 minutes  
**Deployments:** Automatic from now on! 🎉

**Questions?** Open an issue or check [DEPLOYMENT.md](./DEPLOYMENT.md)

