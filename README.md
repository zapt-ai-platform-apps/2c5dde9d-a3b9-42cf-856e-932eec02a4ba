# ReactJS App

## Overview

This is a ReactJS app built with Vite and Tailwind CSS. It showcases a customized Tailwind CSS design system for consistent and elegant UI.

## User Journeys

1. [Welcome Screen](docs/journeys/welcome-screen.md) - Experience the elegant landing page of the app.

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

This app does not use any external APIs.

## Environment Variables

The following environment variables are required:

- `COCKROACH_DB_URL`
- `NPM_TOKEN`
- `VITE_PUBLIC_APP_ID`
- `VITE_PUBLIC_APP_ENV`
- `VITE_PUBLIC_SENTRY_DSN`
- `VITE_PUBLIC_UMAMI_WEBSITE_ID`

Please ensure they are set in your `.env` file.