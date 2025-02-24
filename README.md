# Next.js 15 App Router - Dynamic Route Data Fetching Issue

This repository demonstrates a bug encountered when using dynamic routes and data fetching in Next.js 15's App Router.  The issue involves inconsistencies in how data is fetched and rendered, particularly when navigating between different dynamic routes.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to different dynamic routes (e.g., `/product/1`, `/product/2`).  Observe inconsistent behavior in data fetching or rendering.

## Expected Behavior

Data should be fetched correctly and rendered consistently across all dynamic routes.

## Actual Behavior

Inconsistent data fetching or rendering may occur.  This could include missing data, stale data, or rendering errors.

## Possible Causes

Potential causes include issues with:

* Client-side vs. server-side data fetching
* Caching mechanisms in the App Router
* Interaction between dynamic routes and data fetching strategies