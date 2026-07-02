# Dhairya Shah — Portfolio

Built with React + Vite. Warm Linen palette.

## Setup

```bash
npm install
npm run dev
```

## Deploy to Vercel
```bash
npm run build
# then drag the `dist/` folder to vercel.com, or connect your GitHub repo
```

## File Structure
```
src/
├── main.jsx               # Entry point
├── App.jsx                # Root component — composes all sections
├── index.css              # Global CSS tokens + animations
├── App.css
├── assets/
│   └── assets.js          # Your photo, certificate & resume (base64 embedded)
└── components/
    ├── Navbar.jsx / .css
    ├── Hero.jsx / .css     ← sparkle stars live here (photo area only)
    ├── StatsBand.jsx / .css
    ├── About.jsx / .css    ← skills grid + terminal widget
    ├── Projects.jsx / .css
    ├── Research.jsx / .css
    ├── Certifications.jsx / .css
    └── Contact.jsx / .css
```

## What's Wired Up
- ✅ Navbar smooth scroll + active highlight on scroll
- ✅ Hamburger mobile menu
- ✅ Resume button → downloads your PDF
- ✅ View Projects → scrolls to projects
- ✅ Get in Touch → scrolls to contact
- ✅ GitHub / LinkedIn / Email buttons → real URLs
- ✅ Contact form with Sent ✓ feedback
- ✅ Sparkle stars rising from photo only
- ✅ Scroll reveal animations
- ✅ Fully responsive (mobile, tablet, desktop)
