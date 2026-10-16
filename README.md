This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Hajj seasons and local admin

Season data lives in `data/seasons/<year>/season.json`; season assets live in `public/seasons/<year>/`. `data/settings.json` selects the public default. Hajj 2027 is the active season. Its partner records and pilgrim allocations are copied from Hajj 2026, with all package brochures intentionally omitted until 2027 offers are entered.

The admin dashboard is available at `/admin` when running the local Node server. Create a password hash with `node scripts/create-admin-hash.mjs`, then put the printed `ADMIN_PASSWORD_HASH` value and a long random `ADMIN_SESSION_SECRET` in `.env.local`. Generate the session secret with `node -p "require('node:crypto').randomBytes(48).toString('hex')"`. Restart the server, open `http://localhost:3000/admin`, sign in, select a season, edit its JSON, and upload season assets. Save the year with `status` set to `published` before making it active.

The admin uses HTTP-only signed sessions and disables cross-origin writes. Runtime JSON and asset writes are disabled when `VERCEL` is set: Vercel's serverless filesystem is not persistent. Use the dashboard locally, review the changed JSON and assets, then commit and deploy manually. This project does not push, pull, or deploy changes automatically. Do not expose the dashboard on a host without a persistent writable filesystem and HTTPS. Keep `.env.local` private.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
