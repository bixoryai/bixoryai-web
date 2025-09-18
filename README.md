
# Bixory AI - Build Intelligence X with AI

Welcome to your Lovable Project! This application showcases AI-powered solutions, education, and business transformation.

## Getting Started

To run this project locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment variables

1. Copy the example environment file: `cp .env.example .env`
2. Provide your Supabase credentials by setting values for `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env`.
3. When deploying, store the same values in your repository secrets so the build pipeline can inject them during `npm run build`.

## Features

- Modern UI design with Tailwind CSS
- Component library with shadcn/ui
- Responsive layouts for all device sizes
- React Router for navigation

## Project Structure

- `/src/components` - UI components
- `/src/pages` - Page components
- `/src/hooks` - Custom React hooks

