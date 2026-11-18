# starter-frontend

A Nuxt 4 starter baseline: [@nuxt/ui](https://ui.nuxt.com), Tailwind CSS 4, ESLint (`@antfu/eslint-config`), TypeScript typechecking, Vitest (unit + Nuxt-environment component tests) with coverage, and Playwright e2e tests.

## Requirements

- Node version pinned in [.nvmrc](.nvmrc) (Node 22+)
- npm (see `package-lock.json`)

## Setup

```bash
npm install
```

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server at `http://localhost:3000` |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` / `lint:fix` | Lint (and autofix) with ESLint |
| `npm run typecheck` | Typecheck app code and test/config files |
| `npm run test:unit` | Run Vitest unit + Nuxt-environment tests |
| `npm run test:unit:watch` | Run Vitest in watch mode |
| `npm run test:coverage` | Run unit/Nuxt tests with coverage (`coverage/`) |
| `npm run test:e2e` | Run Playwright e2e tests (`test/e2e/`) |
| `npm run test` | Run unit + e2e tests |

## Adding a design system

No design system ships with the starter: it runs on stock Nuxt UI and Tailwind CSS 4 defaults. To add a project's design system:

1. Add its CSS (tokens, `@theme` palettes, font faces) and import it in `app/assets/css/main.css`, after `@nuxt/ui`.
2. Map its palettes to Nuxt UI's semantic colors (`primary`, `secondary`, `success`, `info`, `warning`, `error`, `neutral`) in `app/app.config.ts`. You can also set component overrides and icons there.
3. If it adds semantic colors beyond Nuxt UI's defaults, list them under `ui.theme.colors` in `nuxt.config.ts`.

See [Nuxt UI theming](https://ui.nuxt.com/docs/getting-started/theme/design-system) for details.

## E2E setup

First time running e2e tests locally, install a browser binary:

```bash
npx playwright install --with-deps chromium
```

Check out the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) and the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
