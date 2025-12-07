# Next.js Migration Guide

This portfolio website has been successfully migrated from Vite + React to Next.js 15!

## What Changed

### 🎉 New Features
- **Next.js App Router** - Modern file-based routing with React Server Components
- **Server-Side API Routes** - Spotify credentials now secured on the server
- **Image Optimization** - Ready for `next/image` component (images in `/public`)
- **Better SEO** - Built-in metadata API for improved search engine visibility
- **Faster Builds** - Optimized production builds with automatic code splitting

### 📁 Project Structure
```
project/
├── app/                    # Next.js app directory
│   ├── api/               # API routes (Spotify integration)
│   │   └── spotify/
│   │       ├── token/
│   │       ├── current-track/
│   │       ├── top-artists/
│   │       ├── top-tracks/
│   │       └── recently-played/
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── providers.tsx      # Client-side providers (Theme)
│   └── globals.css        # Global styles
├── src/                   # Existing components and hooks
│   ├── components/
│   │   ├── *Client.tsx    # Client component wrappers
│   │   └── ...            # Original components
│   └── hooks/
│       ├── *.next.ts      # Next.js-compatible hooks
│       └── ...            # Original hooks
├── public/                # Static assets
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript config (updated)
└── tailwind.config.js     # Tailwind config (updated)
```

## Getting Started

### 1. Environment Variables
Copy your Spotify credentials to `.env.local`:

```bash
# Create .env.local if it doesn't exist
cp .env.local.example .env.local
```

Then add your Spotify API credentials:
```env
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REFRESH_TOKEN=your_refresh_token
```

**Note:** Next.js uses `SPOTIFY_*` instead of `VITE_SPOTIFY_*` for environment variables.

### 2. Run Development Server

```bash
# Next.js (new default)
npm run dev

# Vite (still available if needed)
npm run dev:vite
```

Visit [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
# Next.js production build
npm run build
npm start

# Vite build (still available)
npm run build:vite
```

## Key Differences

### Components
- Components using hooks/state/events need `'use client'` directive
- Server Components are the default (better performance)
- Client components are wrapped in `*Client.tsx` files

### API Routes
- Spotify API calls now go through `/api/spotify/*` routes
- Server-side authentication keeps credentials secure
- No more exposed API keys in client code

### Routing
- Currently single-page (all sections on home)
- Ready to add new pages: just create files in `app/` directory
- Future: Can add `/projects/[id]` for individual project pages

### Styling
- Tailwind CSS works the same way
- Global styles in `app/globals.css`
- All existing styles preserved

## Troubleshooting

### Port Already in Use
If port 3000 is taken:
```bash
npm run dev -- -p 3001
```

### Environment Variables Not Working
- Make sure `.env.local` exists
- Restart dev server after changing env vars
- Verify variable names don't have `VITE_` prefix

### Build Errors
If you see module resolution errors:
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## Migration Benefits

✅ **Security**: API keys hidden server-side
✅ **Performance**: Server Components + automatic code splitting
✅ **SEO**: Built-in metadata and static generation
✅ **DX**: Better error messages and Fast Refresh
✅ **Future-Ready**: Easy to add dynamic routes and features

## Backward Compatibility

Your Vite setup is still available:
- Run `npm run dev:vite` for Vite development
- Run `npm run build:vite` for Vite production build
- All original files untouched in `src/`

## Next Steps

1. **Test thoroughly** - Verify all features work
2. **Add Spotify credentials** - Update `.env.local`
3. **Deploy** - Use Vercel, Netlify, or any Node.js host
4. **Optimize images** - Replace `<img>` with `next/image`
5. **Add new features** - Dynamic project pages, blog, etc.

## Questions?

Check the [Next.js Documentation](https://nextjs.org/docs) or refer to the original Vite setup if needed.
