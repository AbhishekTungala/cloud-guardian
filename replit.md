# CloudHeal - AI-Powered Infrastructure Monitoring Platform

## Overview
CloudHeal is an AI-powered platform for automated monitoring and self-healing infrastructure systems. The application detects issues, diagnoses root causes, and applies fixes automatically.

## Project Architecture
- **Framework**: Vite + React (TypeScript)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router v6
- **State Management**: TanStack React Query
- **Forms**: React Hook Form with Zod validation

## Project Structure
```
src/
├── components/    # Reusable UI components
├── data/          # Static data and configuration
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── pages/         # Page components
├── App.tsx        # Main application component
├── App.css        # Application styles
├── index.css      # Global styles
└── main.tsx       # Application entry point
```

## Development
- **Dev Server**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`

## Recent Changes
- January 2, 2026: Migrated from Lovable to Replit environment
  - Updated Vite config to use port 5000
  - Configured allowedHosts for Replit proxy
  - Removed lovable-tagger dependency from vite config
