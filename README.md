# Portfolio Next.js - Fahmi AR

Modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel / GitHub Pages

## ✨ Features

- ✅ Modern responsive design
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ SEO optimized
- ✅ Fast performance
- ✅ Smooth animations
- ✅ Mobile-first approach

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/portfolio-nextjs.git

# Install dependencies
cd portfolio-nextjs
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 🛠️ Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects section
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer component
├── types/
│   └── index.ts            # TypeScript types
├── data/
│   └── portfolio.ts        # Portfolio data
└── public/
    └── images/             # Image assets
```

## 🎨 Customization

### Update Personal Info

Edit `data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  // ...
};
```

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: '#667eea',
  secondary: '#764ba2',
}
```

### Add Projects

Edit `data/portfolio.ts`:

```typescript
export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    image: "/images/project.jpg",
    tags: ["React", "Next.js"],
    link: "https://project-url.com",
  },
];
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy!

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Deploy to GitHub Pages

1. Install gh-pages:

```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:

```json
"scripts": {
  "deploy": "next build && next export && gh-pages -d out"
}
```

3. Deploy:

```bash
npm run deploy
```

## 📝 Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🔧 Configuration

### Next.js Config

Edit `next.config.ts` for custom configuration.

### Tailwind Config

Edit `tailwind.config.ts` for custom theme.

### TypeScript Config

Edit `tsconfig.json` for TypeScript settings.

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache
rm -rf .next
npm run build
```

### Type Errors

```bash
# Check types
npx tsc --noEmit
```

## 📄 License

MIT License - feel free to use this template!

## 👤 Author

**Fahmi AR**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Next.js Team
- Tailwind CSS
- Vercel

---

**Made with ❤️ using Next.js**
