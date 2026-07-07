# Website Engine

This repo is now split into a reusable website engine and a first client implementation.

- `packages/website-engine` contains reusable layouts, components, industry renderers, schemas, local SEO helpers, validators, and copy-quality checks.
- `apps/kazemi-construction` contains Kazemi-specific business data, content, theme, SEO, and route wrappers.
- Root `app/*` files are thin Next.js route entry points that render the Kazemi app through the engine.

To create another contractor site, duplicate `apps/kazemi-construction`, update its config files, and point the root route wrappers or deployment entry to the new app pages.

