# Deploying to Vercel

## Prerequisites
- A Vercel account (sign up at https://vercel.com)
- Vercel CLI installed (optional, for command-line deployment)

## Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub** (already done ✅)

2. **Go to Vercel Dashboard**
   - Visit https://vercel.com/dashboard
   - Click "Add New..." → "Project"

3. **Import your GitHub repository**
   - Select "Import Git Repository"
   - Choose your repository: `TIC-Global-Services/Autonomous`
   - Click "Import"

4. **Configure the project**
   - Framework Preset: `Vite`
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build`
   - Output Directory: `dist/spa`
   - Install Command: `npm install`

5. **Environment Variables** (if needed)
   - Add any environment variables your app needs
   - Click "Add" for each variable

6. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 2-3 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

## Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project root**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Confirm project settings
   - Wait for deployment

4. **Deploy to production**
   ```bash
   vercel --prod
   ```

## Post-Deployment

### Custom Domain
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update your DNS records as instructed

### Automatic Deployments
- Every push to `main` branch will automatically deploy to production
- Pull requests will create preview deployments

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify build command is correct

### 404 Errors
- Make sure `vercel.json` is configured correctly
- Check that routes are properly set up

### Environment Variables
- Add them in Vercel dashboard under Settings → Environment Variables
- Redeploy after adding variables

## Current Configuration

The project is configured with:
- Build command: `npm run build`
- Output directory: `dist/spa`
- Node version: Latest LTS
- Framework: Vite + Express

## Support

For issues, check:
- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
