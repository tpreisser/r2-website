# Cloudflare Pages Deployment Guide

This guide will help you deploy your Next.js site to Cloudflare Pages using Wrangler CLI, which supports up to 20,000 files (vs. 1,000 file limit in the web interface).

## Prerequisites

1. A Cloudflare account
2. Node.js installed (you already have this)

## Step 1: Install Wrangler CLI

```bash
npm install -g wrangler
```

Or use npx (no installation needed):
```bash
npx wrangler --version
```

## Step 2: Login to Cloudflare

```bash
wrangler login
```

This will open your browser to authenticate with Cloudflare.

## Step 3: Build Your Site

```bash
npm run build
```

This will create a static export in the `out` directory.

## Step 4: Deploy to Cloudflare Pages

### First Time Deployment

```bash
npm run deploy
```

Or manually:
```bash
wrangler pages deploy out --project-name=r2-solutions
```

### Subsequent Deployments

Just run:
```bash
npm run deploy
```

## Step 5: Configure Custom Domain (Optional)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** → **r2-solutions**
3. Click **Custom domains**
4. Add your domain (e.g., `r2solutions.ai` and `www.r2solutions.ai`)
5. Cloudflare will automatically configure DNS records

## Troubleshooting

### If you get authentication errors:
```bash
wrangler logout
wrangler login
```

### If deployment fails:
- Make sure you've run `npm run build` first
- Check that the `out` directory exists
- Verify your Cloudflare account has Pages enabled

### To preview locally before deploying:
```bash
npm run build
npx wrangler pages dev out
```

## Environment Variables (if needed)

If you need environment variables:
1. Go to Cloudflare Dashboard → Pages → r2-solutions → Settings → Environment Variables
2. Add your variables there

## Notes

- The static export generates all files in the `out` directory
- Wrangler CLI can handle up to 20,000 files
- Your site will be available at `https://r2-solutions.pages.dev` (or your custom domain)
