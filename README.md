# Sharath Chandra Portfolio

A modern, responsive developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. The site presents professional experience, technical skills, featured projects, detailed case studies, achievements, GitHub-style activity, and contact information.

## Live Deployment

This portfolio is hosted online with Vercel.

## Highlights

- Responsive portfolio layout optimized for desktop, tablet, and mobile
- Animated hero, section reveals, cards, counters, and scroll progress
- Project case-study pages with detailed problem, approach, implementation, challenge, and result sections
- Major project showcase for an IoT face-recognition surveillance robot with real project snapshots
- Downloadable resume and accessible contact links
- Production-ready Vite build configuration with Vercel support

## Featured Projects

- **IoT Face Recognition Surveillance Robot** - Major academic project using Raspberry Pi, Python, OpenCV, IoT sensors, wireless movement control, and Telegram alerts.
- **RITZY E-Commerce Platform** - Responsive commerce flow with authentication, cart, checkout, and API-ready structure.
- **Food & Feast Restaurant System** - Restaurant order, billing, inventory, supplier, and revenue interface.
- **TravelWorld Adventure Website** - Travel discovery website with destination cards, CTAs, search inputs, and gallery sections.
- **Smart Food Waste Reduction System** - Laravel and MySQL sustainability system for food inventory and waste-reduction workflows.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- React Icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
src/
  components/      Reusable UI and page sections
  data/            Portfolio profile, project, skill, and activity content
  hooks/           Motion and preference helpers
  pages/           Home and case-study pages
  styles/          Tailwind and custom global styles
public/
  project-screenshots/
  project-previews/
  profile/
```

## Deployment

The app is configured for Vercel using `vercel.json`. After pushing changes to the connected repository, Vercel can build the site with:

```bash
npm run build
```

The generated production assets are emitted to `dist/`.
