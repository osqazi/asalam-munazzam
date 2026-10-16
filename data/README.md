# Season data

- `settings.json` selects the active public season and lists available years.
- `seasons/<year>/season.json` stores that year's partner allocations, packages, SEO fields, and notifications.
- `public/seasons/<year>/` stores that year's logos and other public assets.

Hajj 2027 was copied from the Hajj 2026 partner list and pilgrim allocations. Its package brochure arrays and notifications are empty until the correct 2027 information is entered. The Hajj 2026 JSON and assets remain preserved separately.

The admin dashboard writes these files on a local Node.js server with persistent disk. Vercel runtime writes are deliberately disabled because serverless filesystem changes are not durable. Use the dashboard locally, review the JSON/assets, then commit and deploy manually.
