# AGENTS.md

Personal portfolio site (labibkow.com): Next.js **App Router**, plain JavaScript, CSS Modules.
No TypeScript, no tests, no CI.

## Commands

- `npm run dev` — Turbopack dev server on http://localhost:3000.
- `npm run build` — the only compile check. There is no test suite and no typecheck.
- `npm run lint` — runs `eslint .` with the flat config in `eslint.config.mjs`.
  ESLint must stay on 9.x: 10.x crashes `eslint-config-next` with
  `scopeManager.addGlobals is not a function`.
- VS Code debug configs are in `.vscode/launch.json` (server / client / full stack).

## Layout and conventions

- `app/layout.js` is the only shell: imports `styles/globals.css`, loads fonts with
  `next/font/google`, exports `metadata`/`viewport`, and wraps every page in `Navbar` + `Footer`.
  Page titles come from each route's `export const metadata` (the layout supplies the
  `%s | Labib Kowsar` template and the default home title).
- Routes: `app/page.js` (home), `app/projects/page.js`, `app/projects/reflow/page.js`,
  `app/projects/robot/page.js`, `app/resume/page.js`, `app/contact/page.js`.
  `app/sitemap.js` and `app/robots.js` are generated from route lists.
- **Server Components are the default.** Only these are client components (`"use client"`):
  `components/nav.js`, `components/homeChat.js`, `components/projectGrid.js`,
  `components/detailCard.js`, `components/contactForm.js`. Keep new components server-side
  unless they use state, effects, event handlers, or browser APIs.
- Import alias `@/*` → repo root (`jsconfig.json`). Prefer `@/components/...`, `@/styles/...`,
  `@/lib/...`. Style imports must resolve through the alias: `@/styles/x.module.css`.
- Styling is one CSS Module per component under `styles/`, imported as `styles.*`. A few
  global-only classes (`.navHead`, `.logo`, `.green`, `.hideNav`, `.skipLink`, `.creditLink`,
  `#blockAlign`) live in `styles/globals.css` and are used as plain className strings in
  `components/nav.js` / `app/layout.js`.
- Fonts are self-hosted by `next/font` and exposed as `--font-urbanist`, `--font-lato`, and
  `--font-lexend`. Use those variables in CSS. Do not re-add `@import url(fonts.googleapis...)`.
- Images are optimized (`images.unoptimized` is gone; the site is on Vercel). Use static imports
  so `next/image` gets intrinsic size + blur data. Prefer `width`/`height`; use `sizes` only when
  the rendered width varies.
- Tailwind is **not** installed or wired up. Don't add utility classes.

## Where content lives

- Home page "text conversation" copy: `lib/homeContent.js`. Strings are raw HTML and contain
  Typed.js control sequences (e.g. `^2500`). `questions`/`defaultQuestion` define the button order.
- Home images: `public/home/*.webp`, imported through the map in `lib/homeImages.js`.
  Adding a photo means adding an import + map entry there (Turbopack cannot resolve a
  template-literal `require`).
- Project cards: `lib/projects.js` (`contentArr` with a stable `slug`, plus `cardMeta` and
  `sections`) and `lib/projectImages.js` (card + dialog images keyed by slug). Add a project by
  adding one entry, one `cardMeta` row, image imports, and the slug to a section. Never index
  `contentArr` by position.
- Hardware case studies: `app/projects/reflow/page.js` and `app/projects/robot/page.js` are long
  server-rendered JSX sharing `styles/reflow.module.css` and `components/imgBox.js`.
- Static images are imported with `@/public/...` (enables `placeholder="blur"`); public assets
  referenced by URL string use `public/` paths. Nothing imports files out of `public/` as modules
  any more.

## Rendering / interaction notes

- `components/homeChat.js` lets Typed.js own the typed container's DOM: React never renders
  children into it, Typed is dynamically imported, and `prefers-reduced-motion` gets the full
  answer instantly. There is also a visually hidden copy of the answer for crawlers. Don't
  reintroduce `createRoot`/imperative React rendering (the old code leaked a second root).
- The projects dialog is only mounted while open, traps nothing but closes on Escape/backdrop,
  locks body scroll, and uses `role="dialog"`/`aria-modal`. Keep it that way.
- `styles/globals.css` sets `scroll-behavior: smooth`; `app/layout.js` therefore puts
  `data-scroll-behavior="smooth"` on `<html>` so Next 16 still snaps to the top on navigation.
- `components/nav.js` uses CSS for the mobile breakpoint and only toggles `hideNav`. Don't add a
  resize listener or a matchMedia hook.

## Build and dev gotchas

- `next.config.js` sets `turbopack.root` to the repo so Turbopack stops inferring
  `C:\Users\labib` from a stray `package-lock.json`.
- `next.config.js` sets `allowedDevOrigins: ['192.168.1.78']` so the dev server can be opened from
  another device on the LAN (`http://192.168.1.78:3000`). If the machine's IP changes, update this
  or Next blocks the HMR/dev-resource requests.
- `images.qualities` defaults to `[75]` in Next 16, so a `quality` prop outside that list is
  coerced. Don't pass `quality` unless it is added to the config.
- The legacy `.eslintrc.json` and `tailwind.config.js` are gone; `eslint.config.mjs` is the only
  lint config.

## Browser testing (Playwright CLI)

- Playwright is installed **globally** as `@playwright/cli`, not as a project dependency. Use the
  `playwright-cli` command: there is no `playwright` or `@playwright/test` in `node_modules`, so
  `npx playwright` would fetch a different package.
- `.playwright/cli.config.json` drives installed Microsoft Edge (`channel: "msedge"`), so no browser
  download is needed.
- Use it to verify UI changes: `npm run dev`, then `playwright-cli open http://localhost:3000`,
  `snapshot` (returns element refs for `click`/`fill`), `resize <w> <h>` for the 900px nav
  breakpoint, `console` for JS errors, `screenshot --full-page`, `close`.
  `-s=<name>` isolates sessions and `run-code` accepts raw Playwright snippets.
- `set-reduced-motion reduce` makes the home page render the full answer instantly, which is handy
  for layout screenshots.
- There is no Playwright test suite and no `test` script — this is ad-hoc browser verification.
- CLI artifacts (screenshots, traces, saved storage state) land in `.playwright-cli/`, which is
  gitignored because it can contain credentials.

## Environment

- `components/contactForm.js` sends via the EmailJS browser SDK and needs
  `NEXT_PUBLIC_SENDER_ID` and `NEXT_PUBLIC_PUBLIC_KEY`. There is no `.env.example`; missing values
  only fail when the form is submitted (it shows the error banner), not at build time.
  `.env*.local` is gitignored.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
