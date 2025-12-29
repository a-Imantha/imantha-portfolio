# Vercel Deployment Guide

This guide walks you through deploying your portfolio to Vercel with continuous deployment via GitHub Actions.

## 📋 Prerequisites

- GitHub account with this repository
- Vercel account (free tier works)
- Git repository pushed to GitHub

## 🚀 Quick Start (Automatic Deployment)

### Step 1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and use your GitHub account
3. Authorize Vercel to access your GitHub repositories

### Step 2: Import Project to Vercel

1. **From Vercel Dashboard:**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find and select `imantha-portfolio`

2. **Configure Project:**
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

3. **Environment Variables** (Optional):
   - Add `NEXT_PUBLIC_MEDIUM_RSS_URL` if using Medium RSS
   - Example: `https://medium.com/feed/@yourusername`

4. Click **"Deploy"**

### Step 3: Get Vercel Credentials for GitHub Actions

#### 3.1 Get Vercel Token

1. Go to [Vercel Account Settings](https://vercel.com/account/tokens)
2. Click "Create Token"
3. Name it: `github-actions-portfolio`
4. Set scope: `Full Account`
5. Click "Create" and **copy the token** (shown only once!)

#### 3.2 Get Project IDs

Run these commands in your terminal:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Link your project
cd /path/to/imantha-portfolio
vercel link

# Get your IDs
vercel project ls
```

Or get them from Vercel Dashboard:
1. Go to your project settings
2. **Project ID**: Settings → General → Project ID
3. **Org ID**: Account Settings → General → Your ID

#### 3.3 Add Secrets to GitHub

1. Go to your GitHub repository
2. Navigate to: **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"** and add these:

| Secret Name | Value | Where to Find |
|-------------|-------|---------------|
| `VERCEL_TOKEN` | Your Vercel token | Step 3.1 |
| `VERCEL_ORG_ID` | Your Vercel org ID | Step 3.2 |
| `VERCEL_PROJECT_ID` | Your project ID | Step 3.2 |
| `MEDIUM_RSS_URL` | Your Medium RSS URL (optional) | Your Medium profile |

**Example secrets:**
```
VERCEL_TOKEN: YXBjXzF4eFhYeHh4eHh4eHh4eHh4eHh4eA==
VERCEL_ORG_ID: team_xxxxxxxxxxxxxxxxxxxx
VERCEL_PROJECT_ID: prj_xxxxxxxxxxxxxxxxxxxx
MEDIUM_RSS_URL: https://medium.com/feed/@imantha
```

### Step 4: Enable GitHub Actions

1. Go to your GitHub repository
2. Navigate to: **Settings** → **Actions** → **General**
3. Under "Workflow permissions":
   - Select **"Read and write permissions"**
   - Check **"Allow GitHub Actions to create and approve pull requests"**
4. Click **"Save"**

### Step 5: Test the Deployment

#### 5.1 Test Production Deployment

```bash
# Make a change
echo "# Test deployment" >> README.md

# Commit and push to main
git add .
git commit -m "test: trigger deployment"
git push origin main
```

Watch the deployment:
1. Go to **Actions** tab in GitHub
2. Click on "Deploy to Vercel" workflow
3. Monitor the `deploy-production` job
4. Check your Vercel dashboard for the deployment

#### 5.2 Test Preview Deployment

```bash
# Create a new branch
git checkout -b test-preview

# Make a change
echo "# Test preview" >> README.md

# Commit and push
git add .
git commit -m "test: preview deployment"
git push origin test-preview

# Create a Pull Request on GitHub
```

The workflow will:
- ✅ Run quality checks
- 🏗️ Build a preview deployment
- 💬 Comment the preview URL on your PR

## 🔄 Deployment Workflow

### What Happens on Push to Main?

1. **Quality Checks** run first:
   - Format check
   - ESLint validation
   - TypeScript type checking

2. **Production Deployment**:
   - Builds the project
   - Deploys to production
   - Updates your live site

### What Happens on Pull Requests?

1. **Quality Checks** run first (same as above)

2. **Preview Deployment**:
   - Creates a preview deployment
   - Comments the preview URL on the PR
   - Each commit updates the preview

## 🛠️ Advanced Configuration

### Custom Domain Setup

1. Go to Vercel Dashboard → Your Project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain:
   ```
   imantha.dev
   www.imantha.dev
   ```
4. Follow DNS configuration instructions
5. Vercel automatically provisions SSL certificate

### Environment Variables

Add environment variables in Vercel:

1. **Dashboard Method:**
   - Go to Project Settings → Environment Variables
   - Add variables for: Production, Preview, Development

2. **CLI Method:**
   ```bash
   vercel env add NEXT_PUBLIC_MEDIUM_RSS_URL production
   vercel env add NEXT_PUBLIC_MEDIUM_RSS_URL preview
   ```

### Build Settings Override

Edit `vercel.json` if needed:

```json
{
  "buildCommand": "npm run build",
  "framework": "nextjs",
  "regions": ["iad1"],
  "git": {
    "deploymentEnabled": true
  }
}
```

## 📊 Monitoring Deployments

### Via GitHub Actions

- Go to **Actions** tab
- View workflow runs
- Check logs for each step

### Via Vercel Dashboard

- Go to [Vercel Dashboard](https://vercel.com/dashboard)
- Select your project
- View deployments, logs, and analytics

### CLI Monitoring

```bash
# List recent deployments
vercel ls

# View deployment logs
vercel logs <deployment-url>

# Inspect deployment
vercel inspect <deployment-url>
```

## 🐛 Troubleshooting

### Build Fails on Vercel

**Check logs:**
1. Go to deployment in Vercel Dashboard
2. Click on the failed deployment
3. Review build logs

**Common issues:**
- Missing environment variables
- TypeScript errors (run `make type-check` locally)
- Dependency issues (delete `node_modules` and reinstall)

**Solution:**
```bash
# Run preflight checks locally
make preflight

# Fix any issues
make format
make lint-fix

# Push fixes
git commit -am "fix: resolve build issues"
git push
```

### GitHub Action Fails

**Check secrets:**
```bash
# Verify secrets are set correctly
# Go to: Settings → Secrets and variables → Actions
```

**Re-link project:**
```bash
vercel unlink
vercel link
# Get new IDs and update secrets
```

### Preview Deployment Not Working

**Check PR permissions:**
- Ensure GitHub Actions has write permissions
- Check if workflow triggered (Actions tab)

**Manual trigger:**
```bash
# Trigger workflow manually from Actions tab
# Or close/reopen the PR
```

## 🔒 Security Best Practices

1. **Never commit secrets:**
   - Add `.env.local` to `.gitignore` ✅
   - Use GitHub Secrets for sensitive data ✅

2. **Rotate tokens regularly:**
   - Create new Vercel token every 6 months
   - Update GitHub secrets

3. **Use environment-specific secrets:**
   - Different API keys for production/preview
   - Separate databases for different environments

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## 🎉 Success Checklist

- ✅ Vercel account created
- ✅ Project imported to Vercel
- ✅ GitHub secrets configured
- ✅ GitHub Actions enabled
- ✅ Test deployment successful
- ✅ Preview deployments working
- ✅ Custom domain configured (optional)

## 💡 Tips

- **Preview deployments** are great for testing before merging
- **Vercel Analytics** provides insights (enable in dashboard)
- **Automatic HTTPS** is included with all deployments
- **Edge caching** makes your site blazingly fast
- **Rollback** to previous deployments instantly in dashboard

---

Need help? Check the [Vercel Discord](https://vercel.com/discord) or [GitHub Discussions](https://github.com/vercel/next.js/discussions).

