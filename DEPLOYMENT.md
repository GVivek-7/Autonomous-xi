# Deploying to Vercel - UPDATED

## Quick Fix for 404 Error

The 404 error happens because Vercel needs specific settings for this SPA. Follow these steps:

### Step 1: Update Vercel Project Settings

1. Go to your Vercel project dashboard
2. Click on **Settings** → **General**
3. Update the following:

**Build & Development Settings:**
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build:client`
- **Output Directory**: `dist/spa`
- **Install Command**: `npm install`

### Step 2: Redeploy

1. Go to **Deployments** tab
2. Click the three dots (...) on the latest deployment
3. Click **Redeploy**

OR

1. Make any small change to your code
2. Push to GitHub
3. Vercel will auto-deploy

## Alternative: Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy with correct settings
vercel --build-env VITE_BUILD=true

# For production
vercel --prod
```

## Troubleshooting 404 Errors

If you still see 404:

1. **Check Build Logs**
   - Go to Deployments → Click on deployment → View Build Logs
   - Look for errors during build

2. **Verify Output Directory**
   - After build, check if `dist/spa` folder exists
   - It should contain `index.html` and assets

3. **Check vercel.json**
   - Make sure `vercel.json` has the rewrite rule (already added)

4. **Clear Cache and Redeploy**
   - Settings → General → scroll down
   - Click "Clear Build Cache"
   - Redeploy

## What's Configured

✅ `vercel.json` - Routes all requests to index.html (SPA mode)
✅ Build command updated to `build:client` (client-only build)
✅ Output directory set to `dist/spa`

## Expected Result

After correct configuration:
- Homepage: `https://your-app.vercel.app/` ✅
- Solutions: `https://your-app.vercel.app/solutions` ✅
- What We Do: `https://your-app.vercel.app/whatwedo` ✅
- Contact: `https://your-app.vercel.app/contact` ✅

All routes should work without 404 errors!
