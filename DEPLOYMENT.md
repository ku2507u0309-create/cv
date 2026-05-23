# Deployment Configuration for Vercel

vercel.json is not needed as Vite auto-detects configuration.

For custom deployment:

## Vercel Configuration

1. **Environment Variables**
   ```
   VITE_API_URL=your_api_url
   ```

2. **Build Settings**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Node Version**: 18.x (LTS)

## Deployment Steps

1. Push branch to GitHub:
   ```bash
   git push origin cinematic-portfolio
   ```

2. In Vercel:
   - Click "New Project"
   - Select GitHub repo
   - Select `cinematic-portfolio` branch
   - Click Deploy

3. Your site will be live at:
   ```
   https://your-domain.vercel.app
   ```

## Custom Domain

1. In Vercel Project Settings
2. Go to "Domains"
3. Add your custom domain
4. Update DNS records

## Environment Variables (Optional)

Add in Vercel Project Settings > Environment Variables:
- `VITE_ENABLE_ANALYTICS` - Enable analytics
- `VITE_API_KEY` - API key for backend

## Monitoring

Vercel automatically provides:
- Performance metrics
- Build status
- Deployment history
- Analytics

---

For more info: https://vercel.com/docs
