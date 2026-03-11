# Animations Guide - Portfolio Next.js

## ✅ Animasi yang Sudah Ditambahkan

Portfolio Next.js sekarang memiliki **semua animasi** yang sama dengan versi HTML/CSS!

---

## 🎬 Daftar Animasi:

### 1. **Scroll Progress Bar**

- Progress bar di top halaman yang menunjukkan scroll progress
- Gradient purple-blue
- Smooth transition
- **Component:** `ScrollProgress.tsx`

### 2. **Fade In Up Animation**

- Elemen muncul dari bawah dengan fade
- Digunakan untuk section headers dan content
- **Class:** `fade-in-up`
- **Duration:** 0.6s

### 3. **Stagger Animation**

- Children elements muncul satu per satu dengan delay
- Digunakan untuk stats cards di About section
- **Class:** `stagger-animation`
- **Delay:** 0.1s increment per child

### 4. **Slide In Left/Right**

- Hero text slides dari kiri
- Hero image slides dari kanan
- **Classes:** `slide-in-left`, `slide-in-right`
- **Duration:** 0.8s

### 5. **Pulse Animation**

- Hero SVG circles dengan pulse effect
- Opacity berubah 0.2 → 0.3 → 0.2
- **Class:** `pulse-animation`
- **Duration:** 3s infinite

### 6. **Scale In Animation**

- About image muncul dengan scale effect
- **Class:** `scale-in`
- **Duration:** 0.5s

### 7. **Rotate In Animation**

- Elemen rotate sedikit sambil muncul
- **Class:** `rotate-in`
- **Duration:** 0.6s

### 8. **Scroll Bounce Animation**

- Scroll indicator dengan bounce effect
- **Class:** `scroll-indicator`
- **Duration:** 2s infinite

### 9. **Hover Lift Effect**

- Cards terangkat saat hover
- Shadow bertambah
- **Class:** `hover-lift`
- **Transform:** translateY(-5px)

### 10. **Intersection Observer Animation**

- Elemen muncul saat masuk viewport
- Automatic dengan scroll
- **Class:** `observe-animation`
- **Component:** `ScrollAnimations.tsx`

### 11. **Mobile Menu Animation**

- Menu slide dari atas
- **Class:** `mobile-menu-enter`
- **Duration:** 0.3s

### 12. **Project Card Hover**

- Overlay muncul dengan opacity transition
- Button slide up
- **Duration:** 0.25s

---

## 📝 Cara Menggunakan Animasi:

### Fade In Up (Manual Trigger):

```tsx
<div className="fade-in-up">Content here</div>
```

### Stagger Animation (Children):

```tsx
<div className="stagger-animation">
  <div>Item 1</div> {/* Delay: 0.1s */}
  <div>Item 2</div> {/* Delay: 0.2s */}
  <div>Item 3</div> {/* Delay: 0.3s */}
</div>
```

### Scroll Animation (Auto Trigger):

```tsx
<div className="observe-animation">
  Content animates when scrolled into view
</div>
```

### Hover Lift:

```tsx
<div className="hover-lift">Card that lifts on hover</div>
```

### Slide In:

```tsx
<div className="slide-in-left">Left content</div>
<div className="slide-in-right">Right content</div>
```

---

## 🎨 Komponen dengan Animasi:

### Hero Section:

- ✅ `slide-in-left` - Text content
- ✅ `slide-in-right` - SVG image
- ✅ `pulse-animation` - SVG circles
- ✅ `scroll-indicator` - Bounce animation

### About Section:

- ✅ `observe-animation` - Section header
- ✅ `observe-animation` - Text content
- ✅ `stagger-animation` - Stats cards (3 items)
- ✅ `hover-lift` - Stats cards hover
- ✅ `scale-in` - Image placeholder

### Skills Section:

- ✅ `observe-animation` - Section header
- ✅ `stagger-animation` - Skills grid
- ✅ `observe-animation` - Each skill card
- ✅ `hover-lift` - Card hover effect

### Projects Section:

- ✅ `observe-animation` - Section header
- ✅ `observe-animation` - Each project card
- ✅ Hover overlay animation
- ✅ Button slide up animation

### Contact Section:

- ✅ `observe-animation` - Section header
- ✅ `observe-animation` - Contact info
- ✅ `observe-animation` - Contact form

### Global:

- ✅ Scroll progress bar (top)
- ✅ Smooth scroll behavior
- ✅ Custom scrollbar styling

---

## ⚙️ Konfigurasi Animasi:

### Intersection Observer Settings:

```javascript
const observerOptions = {
  threshold: 0.1, // Trigger when 10% visible
  rootMargin: "0px 0px -100px 0px", // Trigger 100px before bottom
};
```

### Animation Durations:

- **Fast:** 0.3s (mobile menu)
- **Base:** 0.6s (fade in up, rotate in)
- **Slow:** 0.8s (slide in)
- **Infinite:** 2s-3s (pulse, bounce)

### Animation Easings:

- **ease-out:** Most animations
- **ease-in-out:** Pulse animation
- **ease:** Hover effects

---

## 🎯 Performance Tips:

1. **Intersection Observer** digunakan untuk lazy animation
   - Animasi hanya trigger saat elemen visible
   - Hemat resources

2. **CSS Animations** lebih performant dari JavaScript
   - Hardware accelerated
   - Smooth 60fps

3. **Transform & Opacity** properties
   - Tidak trigger reflow/repaint
   - Optimal untuk animasi

4. **Will-change** tidak digunakan
   - Hanya untuk animasi yang sangat complex
   - Portfolio ini sudah cukup smooth tanpa will-change

---

## 🔧 Customization:

### Mengubah Duration:

Edit di `globals.css`:

```css
.fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
  /* Change 0.6s to your preferred duration */
}
```

### Mengubah Delay (Stagger):

Edit di `globals.css`:

```css
.stagger-animation > *:nth-child(1) {
  animation-delay: 0.1s;
}
.stagger-animation > *:nth-child(2) {
  animation-delay: 0.2s;
}
/* Add more or change delays */
```

### Disable Animations:

Hapus class dari component:

```tsx
// Before
<div className="observe-animation">

// After (no animation)
<div>
```

---

## 📊 Animation Performance:

✅ **60 FPS** - Smooth animations
✅ **Hardware Accelerated** - Using transform & opacity
✅ **Lazy Loading** - Intersection Observer
✅ **No Layout Shift** - Animations don't affect layout
✅ **Mobile Optimized** - Reduced motion support

---

## 🎉 Summary:

Portfolio Next.js sekarang memiliki **12 jenis animasi** yang sama persis dengan versi HTML/CSS:

1. Scroll Progress Bar
2. Fade In Up
3. Stagger Animation
4. Slide In Left/Right
5. Pulse Animation
6. Scale In
7. Rotate In
8. Scroll Bounce
9. Hover Lift
10. Intersection Observer
11. Mobile Menu Slide
12. Project Overlay

Semua animasi smooth, performant, dan responsive! 🚀

---

**Files:**

- `app/globals.css` - Animation keyframes & classes
- `components/ScrollProgress.tsx` - Scroll progress bar
- `components/ScrollAnimations.tsx` - Intersection Observer
- `app/layout.tsx` - Animation components integration

**Next steps:**

- Customize animation durations jika perlu
- Add more animations untuk custom sections
- Test di berbagai devices

---

**Made with ❤️ - Animations matched perfectly!**
