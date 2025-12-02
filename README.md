# Kelowna Wrestling Club (KWC) Website

A modern Next.js website for the Kelowna Wrestling Club, built with TypeScript and Tailwind CSS.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Vercel** - Deployment platform (ready for hosting)

## Project Structure

```
my-wrestling-club-site/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout (Navbar, Footer)
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── landing/           # Landing page sections
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── SchedulePreviewSection.tsx
│       ├── CoachesPreviewSection.tsx
│       ├── LocationSection.tsx
│       └── CallToActionSection.tsx
├── public/
│   └── images/            # Static assets (logos, photos)
├── lib/
│   └── ui/                # Utility functions
└── styles/
    └── tokens.css         # Design tokens
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your images to `public/images/`:
   - `logo.svg` - Club logo
   - `hero-bg.jpg` - Hero background image
   - `mat-action-1.jpg` - Wrestling action shot

### Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

```bash
npm run build
npm start
```

## Features (Current & Planned)

### ✅ Current Features
- Landing page with hero section
- About section explaining freestyle wrestling
- Schedule and location preview
- Responsive navigation
- Modern, clean UI

### 🚧 Planned Features
- Admin authentication
- Booking system for first session
- Membership subscription
- Merch page with admin management
- News/announcements feed
- Anonymous feedback form
- Liability waiver with e-signature
- Coach profiles page

## Development Notes

- All images should be placed in `public/images/`
- Components are modular and reusable
- Tailwind CSS is used for styling
- TypeScript ensures type safety

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Connect your GoDaddy domain in Vercel dashboard
4. Deploy!

---

© 2024 Kelowna Wrestling Club
