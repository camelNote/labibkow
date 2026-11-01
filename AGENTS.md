# AGENTS.md

Personal portfolio site (labibkow.com): Next.js **Pages Router**, plain JavaScript, CSS Modules.
No TypeScript, no tests, no CI.

## Commands

- `npm run dev` — Turbopack dev server on http://localhost:3000.
- `npm run build` — the only compile check. There is no test suite and no typecheck.
- `npm run lint` — runs `eslint .` with the flat config in `eslint.config.mjs` (the old
  `.eslintrc.json` is legacy and ignored). ESLint must stay on 9.x: 10.x crashes
  `eslint-config-next` with `scopeManager.addGlobals is not a function`.
- VS Code debug configs are in `.vscode/launch.json` (server / client / full stack).

## Layout and conventions

- `pages/_app.js` is the only shell: imports `styles/globals.css` and wraps every page in
  `Navbar` + `Footer`; global `<title>`/meta live there, not per page.
- Import alias `@/*` → repo root (`jsconfig.json`). Prefer `@/components/...` and `@/styles/...`.
- Styling is one CSS Module per component under `styles/`, imported as `styles.*`. A few global-only
  classes (`.navHead`, `.logo`, `.green`, `.hideNav`, `#blockAlign`) live in `styles/globals.css` and
  are used as plain className strings in `components/nav.js`.
- Tailwind is installed but unused: no `@tailwind` directives and no utility classes in JSX. Don't
  start adding Tailwind classes. `tailwind.config.js` is v3-shaped; Tailwind 4 is CSS-first and
  ignores it.
- `next.config.js` sets `reactStrictMode` and `images.unoptimized: true`, so `next/image` is mostly
  used for sizing.
- Component files are lowercase (`nav.js`, `card.js`), matching the CSS module name.

## Where content lives

- Home page "text conversation" copy and images: `public/home/dict.js`, imported as a module by
  `pages/index.js` even though it is also publicly served. Strings are raw HTML rendered through
  Typed.js and contain its control sequences (e.g. `^2500`). Home images are filenames
  under `public/home/`, resolved with a `require()` template so any file added there is usable.
- Project cards: the `contentArr` array at the top of `pages/projects/index.js`. Each `<Card>` is
  wired manually with a `keyVal` index into that array — add/remove both together or the indexes
  drift.
- Hardware case studies: `pages/projects/reflow.js` and `robot.js` are long hand-written JSX and
  both import `styles/reflow.module.css`.
- Static images are imported with `require("../public/...")` (enables `placeholder="blur"`); public
  assets referenced by URL string (background images, `public/` paths in `<Image src>`).

## Build and dev gotchas

- Style imports must resolve through the alias: `@/styles/x.module.css`. Root-absolute
  (`"/styles/x.module.css"`) and bare (`"styles/x.module.css"`) specifiers fail with
  `Module not found`.
- Tailwind is installed (v4) but not wired into PostCSS: `postcss.config.js` runs only
  `autoprefixer`, because nothing in the repo uses Tailwind. Re-adding `tailwindcss: {}` breaks every
  CSS file on v4; that needs `@tailwindcss/postcss`.
- `next.config.js` sets `allowedDevOrigins: ['192.168.1.78']` so the dev server can be opened from
  another device on the LAN (`http://192.168.1.78:3000`). If the machine's IP changes, update this or
  Next blocks the HMR/dev-resource requests.
- Turbopack warns that it ignored `C:\Users\labib\package-lock.json` because it sits outside this
  repo; set `turbopack.root` in `next.config.js` if that inference ever matters.

## Browser testing (Playwright CLI)

- Playwright is installed **globally** as `@playwright/cli`, not as a project dependency. Use the
  `playwright-cli` command: there is no `playwright` or `@playwright/test` in `node_modules`, so
  `npx playwright` would fetch a different package.
- `.playwright/cli.config.json` drives installed Microsoft Edge (`channel: "msedge"`), so no browser
  download is needed.
- Use it to verify UI changes: `npm run dev`, then `playwright-cli open http://localhost:3000`,
  `snapshot` (returns element refs for `click`/`fill`), `resize <w> <h>` for the 900px nav
  breakpoint, `console` for JS errors, `screenshot`, `close`. `-s=<name>` isolates sessions and
  `run-code` accepts raw Playwright snippets.
- There is no Playwright test suite and no `test` script — this is ad-hoc browser verification.
- CLI artifacts (screenshots, traces, saved storage state) land in `.playwright-cli/`, which is
  gitignored because it can contain credentials.

## Environment

- `components/contactForm.js` sends via the EmailJS browser SDK and needs
  `NEXT_PUBLIC_SENDER_ID` and `NEXT_PUBLIC_PUBLIC_KEY`. There is no `.env.example`; missing values
  only fail when the form is submitted, not at build time. `.env*.local` is gitignored.
- `pages/api/hello.js` is unused create-next-app boilerplate.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
