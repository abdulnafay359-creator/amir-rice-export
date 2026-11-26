# Prime Rice

Next.js App Router project with TypeScript, Tailwind CSS, and ESLint. Application code lives in `src/app`, and imports under `src` can use the `@/` alias.

## Local development

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

On Windows, you can also double-click `start-website.cmd` after installing dependencies.

Open [http://localhost:3000](http://localhost:3000).

Run `npm run lint` to check the source and `npm run build` to verify the production build. Run `npm start` after building to serve the production version locally.

## Database

Set `DATABASE_URL_POOLED` to the pooled Neon Postgres URL in `.env.local` for application queries through `getDatabase()` in `src/lib/db.ts`. Set `DATABASE_URL` to the direct Neon URL for tools that need a direct connection. Restart the dev server after changing either value.

Run `node --env-file=.env.local scripts/setup-database.mjs` once per database. Quote requests appear in the `public.rice_export_inquiries` table in Neon.

## Client reference

The homepage uses [rice harvest footage by Acres of Film](https://www.pexels.com/video/aerial-view-of-rice-harvesting-in-autumn-fields-35293207/) under the [Pexels license](https://www.pexels.com/license/). The optimized video and poster are served from `public/`.

[Amir Rice Export & Import Co.](https://amirriceexport.com/)
