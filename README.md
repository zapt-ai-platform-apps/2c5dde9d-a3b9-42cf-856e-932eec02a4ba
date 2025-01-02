# ReactJS Photos App

## Overview

This is a ReactJS photos app built with Vite and Tailwind CSS. It allows users to upload and view photos in a gallery. The app is optimized for Android devices with a mobile-first design.

## User Journeys

1. [Welcome Screen](docs/journeys/welcome-screen.md) - Experience the elegant landing page of the app.
2. [Sign In with ZAPT](docs/journeys/sign-in-with-zapt.md) - Authenticate to access your photos.
3. [Upload Photos](docs/journeys/upload-photos.md) - Upload new photos to your gallery.
4. [View Gallery](docs/journeys/view-gallery.md) - Browse your uploaded photos.
5. [View Photo Details](docs/journeys/view-photo-details.md) - View a larger version of the photo and additional details.

## Design System

### Color Palette

- **Primary:** `#3B82F6`
- **Secondary:** `#DB2777`
- **Neutral:** `#F3F4F6` to `#111827`

### Typography

- **Font Families:**
  - Sans: Inter
  - Serif: Merriweather
  - Mono: Fira Code
- **Font Sizes:**
  - Heading 1: 3rem (48px)
  - Body: 1rem (16px)

### Spacing

- **Padding/Margins:**
  - Small: 1rem (16px)
  - Medium: 2rem (32px)
  - Large: 3rem (48px)

## External APIs

This app uses the following external APIs:

- **Supabase Authentication** - Used for user authentication.
- **Supabase Storage** - Used for storing uploaded photos.

## Environment Variables

The following environment variables are required:

- `COCKROACH_DB_URL`
- `NPM_TOKEN`
- `VITE_PUBLIC_APP_ID`
- `VITE_PUBLIC_APP_ENV`
- `VITE_PUBLIC_SENTRY_DSN`
- `VITE_PUBLIC_UMAMI_WEBSITE_ID`
- `VITE_PUBLIC_SUPABASE_URL`
- `VITE_PUBLIC_SUPABASE_ANON_KEY`

Please ensure they are set in your `.env` file.
