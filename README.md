# SQLite Next.js Data Example

A Next.js 14 application demonstrating dynamic server rendering and data management using SQLite. Built as a reference implementation for common patterns.

## Core Features

- Server-side SQLite database operations
- Dynamic server rendering for detail pages
- **[TanStack Query (React Query) with hydration](https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr)**
- Server Actions for data mutations
- Tailwind CSS styling

## Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: SQLite with better-sqlite3
- **State Management**: React Query
- **Styling**: Tailwind CSS
- **TypeScript**: Full type safety

## Key Implementation Details

- Main list page (`/some-data`) with add/view functionality
- Dynamic detail pages (`/some-data/[id]`) server rendered
- Server Actions for database operations
- **TanStack Query hydration pattern for initial data**
- Optimistic updates using React Query
- Type-safe database queries

## Project Structure

```
app/
├── actions/ # Server actions & DB operations
├── page.tsx # Main list route
│ └── [id]/ # Dynamic detail pages
└── components/ # React components
```

## Use Cases

Perfect reference for:

- Next.js 14 dynamic server rendering
- SQLite integration in Next.js
- React Query with Server Actions
- TypeScript with better-sqlite3
- Simple CRUD operations

This minimal example demonstrates modern Next.js patterns for server-side rendering and data management.
