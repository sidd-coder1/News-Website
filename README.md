<<<<<<< HEAD
# PulsePress — Next.js News Platform (PWA-Ready)

A modern, responsive, PWA-ready news platform built with Next.js App Router, TailwindCSS, and interactive dashboards. It includes:

- Reader UI with personalized feed, infinite scroll, category tabs, trending tags carousel, emotion filters, article cards with TTS and bookmarks.
- Article detail with live fact-check ticker and nested comments.
- Gamification: leaderboard with points, badges, progress bars.
- Discussion rooms with a chat UI and online presence indicators.
- Citizen journalism submission with image/video previews.
- Green impact meter (animated gauge chart).
- Admin dashboard: user management, editorial queue (filters, sort, scheduling & publish/unpublish), analytics (sentiment charts, trending keywords tag cloud), geo heatmap, audit logs, moderation queue.
- Journalist dashboard: rich text editor, AI assistant sidebar (headline/SEO/summary), media uploads preview, tasks board (drag-and-drop), performance charts.

## Tech Stack

- Next.js 14 (App Router)
- TailwindCSS + basic shadcn-inspired utility classes
- Recharts for charts
- react-simple-maps for world heatmap
- next-themes for dark/light
- @ducanh2912/next-pwa for PWA
- React Quill for RTE
- @hello-pangea/dnd for drag-and-drop

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
```

3. Open http://localhost:3000 in your browser.

## Build for Production

```bash
npm run build
npm start
```

## PWA

- A web app manifest is included at `public/manifest.json`.
- Service worker is configured via `@ducanh2912/next-pwa` in `next.config.mjs`.
- Add icons to `public/icons/` as `icon-192.png` and `icon-512.png` for install prompts (placeholders are currently expected).

## Project Structure

- `app/` — App Router pages
  - `page.tsx` — Reader home feed
  - `admin/` — Admin dashboard
  - `journalist/` — Journalist workspace
  - `article/[id]/page.tsx` — Article detail with comments and live ticker
  - `leaderboard/`, `discussions/`, `submit/` — Additional reader features
- `components/` — UI components
  - `reader/` — Cards, feed, carousel, comments, chat, etc.
  - `admin/` — Users, editorial queue, analytics, moderation, audit log
  - `journalist/` — Editor, tasks board, performance
  - `shared/` — Navbar, Footer, Theme provider, Gauge, LiveTicker
- `lib/theme-provider.tsx` — Theme provider wrapper
- `public/manifest.json` — PWA manifest

## Styling

- TailwindCSS configured in `tailwind.config.ts` and `app/globals.css`.
- Utility classes defined for buttons, cards, tables, badges.

## API Integration Points

You can hook APIs to these components:

- Auth: wire `Navbar` to show user profile & auth actions.
- Content: replace mock data in `components/reader/Feed.tsx`, `components/admin/EditorialQueue.tsx`, and article pages with real API calls.
- Analytics: send chart data props to `components/admin/AnalyticsPanel.tsx` and `components/journalist/PerformancePanel.tsx`.
- Storage (images/videos): connect upload inputs in `components/journalist/EditorPanel.tsx` and `components/reader/CitizenSubmit.tsx` to your storage (e.g., S3, Cloudinary).
- Blockchain: add verification badges or content hashes to `ArticleCard` and editorial actions.

## Notes

- Some features use mock data and client-only interactions for demo purposes.
- Replace placeholder data with real API calls using React Server Components or client data fetching as needed.
- Ensure you provide PWA icons for a complete installable experience.
=======
# News-Website
Daily News update
>>>>>>> 1d4d676af94427df9bc1affddf19be7c3fdfb392
