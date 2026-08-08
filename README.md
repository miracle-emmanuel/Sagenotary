# Sage Mobile Notary & Officiant — Website

A one-page marketing site built with **Vite** + **Tailwind CSS**, designed around
the brand's dual identity: notary public (making documents official) and
wedding officiant (making a marriage official). The recurring "seal" motif —
animated on page load in the hero, echoed as badges throughout — ties the two
services together.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

Output goes to `dist/` — upload that folder to any static host (Netlify,
Vercel, GitHub Pages, etc.).

## Before you launch — things to fill in

- **Contact form**: the booking form in `index.html` (`#contact`) is styled
  but not wired up. Point it at your email (e.g. via Formspree, Netlify
  Forms, or a booking tool like Calendly/Acuity) and update the button and
  helper text.
- **Facebook link**: the footer link currently points to `#` — swap in your
  actual Facebook page URL.
- **Phone number / booking link**: none was included since it wasn't in the
  source material — add it to the hero and contact section once you have a
  preferred number or scheduling link.
- **Photo**: `public/avatar.png` was cropped from your Facebook profile photo.
  Swap in a higher-resolution version if you have one.

## Structure

```
index.html           Page markup + copy
src/style.css         Tailwind entry point + reveal/motion styles
src/main.js            Scroll-reveal behavior
public/avatar.png      Owner photo (circular crop)
public/favicon.svg     Seal-mark favicon
tailwind.config.js     Brand color, type, and animation tokens
```
