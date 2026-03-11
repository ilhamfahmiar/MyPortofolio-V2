# Deploy Portfolio Next.js ke GitHub

Panduan lengkap untuk deploy portfolio Next.js Anda ke GitHub dan GitHub Pages.

---

## 📋 Prerequisites

- Git installed
- GitHub account
- Portfolio Next.js sudah siap

---

## 🚀 Step 1: Create GitHub Repository

### Option A: Via GitHub Website

1. Buka [github.com](https://github.com)
2. Click "New repository" (tombol hijau)
3. Repository name: `portfolio-nextjs` (atau nama lain)
4. Description: "My portfolio built with Next.js, TypeScript, and Tailwind CSS"
5. **JANGAN** centang "Initialize with README" (sudah ada README.md)
6. Click "Create repository"

### Option B: Via GitHub CLI (jika sudah install)

```bash
gh repo create portfolio-nextjs --public --source=. --remote=origin
```

---

## 🔗 Step 2: Connect Local to GitHub

Setelah create repository, GitHub akan kasih instruksi. Copy URL repository Anda.

```bash
# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/portfolio-nextjs.git

# Verify remote
git remote -v
```

**Ganti `YOUR_USERNAME` dengan username GitHub Anda!**

---

## 📤 Step 3: Push to GitHub

```bash
# Push to main branch
git push -u origin main
```

**Jika diminta login:**

- Username: GitHub username Anda
- Password: Gunakan **Personal Access Token** (bukan password biasa)

### Create Personal Access Token (jika belum punya):

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Note: "Portfolio deployment"
4. Expiration: 90 days (atau custom)
5. Select scopes: ✅ repo (all)
6. Generate token
7. **COPY TOKEN** (tidak bisa dilihat lagi!)
8. Gunakan token sebagai password saat push

---

## ✅ Step 4: Verify on GitHub

1. Buka `https://github.com/YOUR_USERNAME/portfolio-nextjs`
2. Pastikan semua files sudah ter-upload
3. Check README.md tampil dengan baik

---

## 🌐 Step 5: Deploy to Vercel (Recommended)

### Why Vercel?

- ✅ Gratis untuk personal projects
- ✅ Automatic deployments
- ✅ Fast global CDN
- ✅ Perfect for Next.js (made by same team)
- ✅ Custom domain support

### Deploy Steps:

1. **Buka [vercel.com](https://vercel.com)**

2. **Sign up dengan GitHub account**

3. **Import Project:**
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `portfolio-nextjs`
   - Click "Import"

4. **Configure Project:**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `next build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Done! 🎉

6. **Your site is live at:**
   ```
   https://portfolio-nextjs-xxx.vercel.app
   ```

### Auto-Deploy on Push:

Setiap kali Anda push ke GitHub, Vercel akan auto-deploy!

```bash
# Make changes
# Commit
git add .
git commit -m "Update content"

# Push
git push

# Vercel will auto-deploy! ✨
```

---

## 🏠 Step 6: Custom Domain (Optional)

### Buy Domain

**Recommended:**

- [Namecheap](https://namecheap.com) - $8-12/year
- [Google Domains](https://domains.google) - $12/year
- [Cloudflare](https://cloudflare.com) - $8-10/year

### Connect to Vercel:

1. **Vercel Dashboard** → Your Project → Settings → Domains

2. **Add Domain:**
   - Enter your domain: `yourdomain.com`
   - Click "Add"

3. **Update DNS Records:**

   Vercel will show you DNS records to add:

   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Add to Domain Registrar:**
   - Go to your domain registrar (Namecheap, etc)
   - Find DNS settings
   - Add the records above
   - Save

5. **Wait for DNS Propagation:**
   - Usually 5-30 minutes
   - Can take up to 24 hours
   - Check status in Vercel dashboard

6. **Done!** Your site is now at `yourdomain.com` 🎉

---

## 📊 Step 7: Add Analytics (Optional)

### Google Analytics

1. **Create GA4 Property:**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create account & property
   - Get Measurement ID: `G-XXXXXXXXXX`

2. **Add to Next.js:**

Create `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Create `app/analytics.tsx`:

```typescript
'use client'

import Script from 'next/script'

export default function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  )
}
```

Add to `app/layout.tsx`:

```typescript
import Analytics from './analytics'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

3. **Push to GitHub:**

```bash
git add .
git commit -m "Add Google Analytics"
git push
```

4. **Add Environment Variable to Vercel:**
   - Vercel Dashboard → Project → Settings → Environment Variables
   - Add: `NEXT_PUBLIC_GA_ID` = `G-XXXXXXXXXX`
   - Redeploy

---

## 🔄 Update Workflow

### Make Changes Locally:

```bash
# 1. Make changes to files
# 2. Test locally
npm run dev

# 3. Build to check for errors
npm run build

# 4. Commit changes
git add .
git commit -m "Description of changes"

# 5. Push to GitHub
git push

# 6. Vercel will auto-deploy! ✨
```

### Check Deployment:

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click your project
3. See deployment status
4. Click "Visit" to see live site

---

## 🐛 Troubleshooting

### Push Failed: Authentication

**Problem:** `fatal: Authentication failed`

**Solution:**

```bash
# Use Personal Access Token as password
# Or setup SSH key

# Setup SSH (recommended):
ssh-keygen -t ed25519 -C "your@email.com"
cat ~/.ssh/id_ed25519.pub
# Copy output and add to GitHub → Settings → SSH Keys

# Change remote to SSH:
git remote set-url origin git@github.com:YOUR_USERNAME/portfolio-nextjs.git
```

### Build Failed on Vercel

**Problem:** Build errors on Vercel

**Solution:**

```bash
# Test build locally first
npm run build

# Fix any errors
# Then push again
git add .
git commit -m "Fix build errors"
git push
```

### Environment Variables Not Working

**Problem:** `.env.local` not working on Vercel

**Solution:**

- Add environment variables in Vercel Dashboard
- Project → Settings → Environment Variables
- Add each variable
- Redeploy

### Custom Domain Not Working

**Problem:** Domain not connecting

**Solution:**

- Check DNS records are correct
- Wait 24 hours for DNS propagation
- Use [whatsmydns.net](https://whatsmydns.net) to check propagation
- Clear browser cache

---

## 📝 Checklist

### Before Deploy:

- [ ] All content updated
- [ ] All images optimized
- [ ] Build successful locally (`npm run build`)
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] Tested on mobile
- [ ] README.md updated

### After Deploy:

- [ ] Site loads correctly
- [ ] All pages working
- [ ] Images loading
- [ ] Links working
- [ ] Mobile responsive
- [ ] Analytics working (if added)
- [ ] Custom domain connected (if applicable)

---

## 🎉 Success!

Your portfolio is now live on:

- **GitHub:** `https://github.com/YOUR_USERNAME/portfolio-nextjs`
- **Vercel:** `https://your-project.vercel.app`
- **Custom Domain:** `https://yourdomain.com` (if configured)

---

## 📞 Need Help?

### Resources:

- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Docs](https://docs.github.com)

### Common Issues:

- Check Vercel deployment logs
- Check browser console for errors
- Test locally first
- Read error messages carefully

---

**Congratulations! Your portfolio is live! 🚀**

Share it with the world! 🌍
