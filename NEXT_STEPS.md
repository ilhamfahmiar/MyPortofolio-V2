# Next Steps - Portfolio Next.js

Panduan lengkap untuk melanjutkan development portfolio Anda.

---

## ✅ Apa yang Sudah Selesai?

### 1. Project Setup ✅

- ✅ Next.js 15 installed
- ✅ TypeScript configured
- ✅ Tailwind CSS setup
- ✅ ESLint configured
- ✅ Git initialized
- ✅ Committed to local git

### 2. Basic Structure ✅

- ✅ App router setup
- ✅ Layout configured
- ✅ Global styles
- ✅ Component structure
- ✅ README.md created

---

## 🎯 What You Need to Do Next

### Step 1: Complete Components (1-2 hours)

Saya sudah membuat struktur dasar. Sekarang Anda perlu melengkapi components:

#### A. Create Navbar Component

Create `components/Navbar.tsx`:

```typescript
'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gradient">
              Fahmi AR
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="hover:text-primary transition">Home</Link>
            <Link href="#about" className="hover:text-primary transition">About</Link>
            <Link href="#skills" className="hover:text-primary transition">Skills</Link>
            <Link href="#projects" className="hover:text-primary transition">Projects</Link>
            <Link href="#contact" className="hover:text-primary transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="#home" className="block px-3 py-2 hover:bg-gray-100 rounded">Home</Link>
            <Link href="#about" className="block px-3 py-2 hover:bg-gray-100 rounded">About</Link>
            <Link href="#skills" className="block px-3 py-2 hover:bg-gray-100 rounded">Skills</Link>
            <Link href="#projects" className="block px-3 py-2 hover:bg-gray-100 rounded">Projects</Link>
            <Link href="#contact" className="block px-3 py-2 hover:bg-gray-100 rounded">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
```

#### B. Create Hero Component

Create `components/Hero.tsx`:

```typescript
export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold mb-4">Hi, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Fahmi AR
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-6">
              UI/UX Designer & Developer
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Computer Engineering graduate specializing in UI/UX Design,
              Web Development, and emerging technologies like AR and Machine Learning.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="btn-gradient px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

#### C. Create Other Components

Similarly, create:

- `components/About.tsx`
- `components/Skills.tsx`
- `components/Projects.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`

**Template untuk setiap component:**

```typescript
export default function ComponentName() {
  return (
    <section id="section-id" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">Section Label</p>
          <h2 className="text-4xl font-bold">Section Title</h2>
        </div>

        {/* Your content here */}
      </div>
    </section>
  )
}
```

---

### Step 2: Add Your Content (30 minutes)

#### Update Personal Info:

Edit components dengan info Anda:

- Nama
- Job title
- Bio
- Email
- Social links

#### Add Your Projects:

Create `data/projects.ts`:

```typescript
export const projects = [
  {
    id: 1,
    title: "E-commerce Redesign",
    description: "Redesigned checkout flow reducing cart abandonment by 45%",
    image: "/images/project-1.jpg",
    tags: ["UI/UX", "Mobile"],
    link: "https://project-url.com",
  },
  // Add more projects...
];
```

---

### Step 3: Add Images (15 minutes)

1. **Prepare images:**
   - Hero photo: 800x800px
   - Project images: 1200x750px each
   - Compress at [TinyPNG.com](https://tinypng.com)

2. **Add to public folder:**

   ```
   public/
   ├── images/
   │   ├── hero.jpg
   │   ├── about.jpg
   │   ├── project-1.jpg
   │   ├── project-2.jpg
   │   └── ...
   ```

3. **Use in components:**

   ```typescript
   import Image from 'next/image'

   <Image
     src="/images/hero.jpg"
     alt="Fahmi AR"
     width={800}
     height={800}
     className="rounded-full"
   />
   ```

---

### Step 4: Test Locally (10 minutes)

```bash
# Start development server
npm run dev

# Open http://localhost:3000

# Test:
- All sections visible
- Navigation working
- Mobile responsive
- No console errors
```

---

### Step 5: Build & Check (5 minutes)

```bash
# Build for production
npm run build

# Check for errors
# Fix any TypeScript or build errors

# Test production build
npm start
```

---

### Step 6: Push to GitHub (5 minutes)

```bash
# Add all changes
git add .

# Commit
git commit -m "Complete portfolio components and content"

# Create GitHub repository (if not done)
# Follow DEPLOY_GITHUB.md

# Push
git push -u origin main
```

---

### Step 7: Deploy to Vercel (10 minutes)

Follow **DEPLOY_GITHUB.md** untuk deploy ke Vercel.

Quick steps:

1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repository
3. Deploy!

---

## 📚 Learning Resources

### Next.js:

- [Next.js Docs](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)

### TypeScript:

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript with React](https://react-typescript-cheatsheet.netlify.app/)

### Tailwind CSS:

- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com/)
- [Tailwind Components](https://tailwindcomponents.com/)

---

## 🎨 Customization Tips

### Change Colors:

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#667eea',
      secondary: '#764ba2',
    }
  }
}
```

### Add Animations:

```typescript
// tailwind.config.ts
theme: {
  extend: {
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      }
    }
  }
}
```

Use in components:

```typescript
<div className="animate-fade-in">Content</div>
```

---

## 🐛 Common Issues

### Issue: Components not found

**Solution:**

```bash
# Make sure components folder exists
mkdir components

# Check import paths use @/
import Component from '@/components/Component'
```

### Issue: Tailwind classes not working

**Solution:**

```bash
# Restart dev server
npm run dev

# Check tailwind.config.ts includes:
content: [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
]
```

### Issue: TypeScript errors

**Solution:**

```bash
# Check types
npx tsc --noEmit

# Fix errors shown
# Common: add proper types to props
```

---

## ✅ Completion Checklist

### Development:

- [ ] All components created
- [ ] Content updated
- [ ] Images added
- [ ] Tested locally
- [ ] Build successful
- [ ] No TypeScript errors
- [ ] No ESLint warnings

### Deployment:

- [ ] Pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Live site working
- [ ] Mobile responsive
- [ ] All links working

### Optional:

- [ ] Custom domain
- [ ] Analytics added
- [ ] SEO optimized
- [ ] Performance tested

---

## 🎉 You're Almost There!

Follow the steps above and your portfolio will be complete!

**Estimated time:** 2-3 hours total

**Need help?** Check:

- README.md (general info)
- DEPLOY_GITHUB.md (deployment guide)
- Next.js docs (technical help)

---

**Good luck! 🚀**

You got this! 💪
