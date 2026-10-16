# Deploy Sophandros on GitHub Pages

The site is a static Astro build (`output: "static"`), hosted on GitHub Pages at
https://www.sophandros.com. `public/CNAME` holds the custom domain. Astro 7 needs Node 22.22+.

## How deploys work

Pending: `.github/workflows/deploy.yml` (needs a token with `workflow` scope to push) builds with `withastro/action` and publishes with
`actions/deploy-pages` on every push to `main`. Pages source: **Settings → Pages → Build and
deployment → GitHub Actions**.

## DNS (Squarespace → Domains → sophandros.com → DNS)

| Type | Host | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `jpolitesmd.github.io` |

Keep the MX/TXT records for email. After DNS resolves, tick **Enforce HTTPS** in Settings → Pages.

## Current interim deploy

Until the workflow is added, Pages serves the `gh-pages` branch, built locally:
`npm run build` then push the contents of `dist/` to `gh-pages`.
