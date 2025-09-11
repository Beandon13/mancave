# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server (Express + Vite) on http://localhost:3000
- `npm run check` - Run TypeScript type checking

### Build and Production
- `npm run build` - Build both client (Vite) and server (esbuild) for production
- `npm run start` - Run production server on http://localhost:3000

### Database
- `npm run db:push` - Push schema changes to PostgreSQL database using Drizzle

## Architecture

### Stack Overview
- **Frontend**: React 18 with TypeScript, Vite, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with TypeScript, running on Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: Wouter (client), Express (server)
- **State Management**: React Query (TanStack Query)

### Project Structure

```
/client                 # Frontend React application
  /src
    /components/ui     # shadcn/ui components library
    /hooks            # Custom React hooks
    /pages            # Page components (home, not-found)
    /lib              # Utilities and query client
    /assets           # Images and static assets

/server                # Backend Express server
  index.ts            # Server entry point
  routes.ts           # API routes definition
  storage.ts          # Storage interface and memory implementation
  vite.ts            # Vite integration for development

/shared               # Shared code between client and server
  schema.ts          # Drizzle schema definitions and types

/dist                # Production build output
  /public           # Client build
  index.js          # Server build
```

### Key Design Patterns

1. **Storage Interface**: The server uses an `IStorage` interface pattern with pluggable implementations (currently `MemStorage` for in-memory storage). This allows easy switching between storage backends.

2. **Path Aliases**: The project uses TypeScript path aliases:
   - `@/` → `client/src/`
   - `@shared/` → `shared/`
   - `@assets/` → `attached_assets/`

3. **API Structure**: Server routes should be prefixed with `/api` and use the storage interface for data operations.

4. **Component Library**: UI components are from shadcn/ui, located in `client/src/components/ui/`. These are customizable Radix UI components with Tailwind styling.

5. **Environment-based Build**: Development uses Vite dev server with HMR, production serves built static files from Express.

### Database Schema
- Uses Drizzle ORM with PostgreSQL
- Schema defined in `shared/schema.ts`
- Currently includes `users` table with id, username, and password fields
- Database URL must be set in `DATABASE_URL` environment variable