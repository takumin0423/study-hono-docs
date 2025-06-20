# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hono web framework application configured to run on Cloudflare Workers. The project uses TypeScript and is managed with pnpm.

## Common Commands

### Development
- `pnpm dev` or `npm run dev` - Start the development server with Wrangler
- `pnpm install` - Install dependencies (uses pnpm as package manager)

### Deployment
- `pnpm deploy` or `npm run deploy` - Deploy to Cloudflare Workers with minification

### Type Generation
- `pnpm cf-typegen` or `npm run cf-typegen` - Generate TypeScript types from Cloudflare Worker configuration

## Architecture

### Technology Stack
- **Framework**: Hono - Lightweight web framework optimized for edge environments
- **Runtime**: Cloudflare Workers
- **Language**: TypeScript (ESNext target)
- **Build Tool**: Wrangler (Cloudflare's CLI tool)
- **Package Manager**: pnpm v10.12.1

### Project Structure
- `src/index.ts` - Main application entry point that exports the Hono app
- `wrangler.jsonc` - Cloudflare Workers configuration (supports comments)
- `tsconfig.json` - TypeScript configuration with JSX support for Hono

### Key Configuration Notes
- The project is configured for ESNext module resolution
- JSX is enabled with Hono's JSX runtime
- Strict TypeScript checking is enabled
- Cloudflare bindings can be typed by running `cf-typegen` and passing them as generics to the Hono constructor

### Cloudflare Integration
When working with Cloudflare-specific features (KV, R2, D1, AI), uncomment the relevant sections in `wrangler.jsonc` and generate types using the `cf-typegen` command. Then update the Hono app initialization to include the bindings:

```typescript
const app = new Hono<{ Bindings: CloudflareBindings }>()
```