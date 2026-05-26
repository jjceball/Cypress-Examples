# TypeScript Practice

A dedicated space to build TypeScript skills outside of Cypress tests. Work through exercises in order, then compare your work in `solutions/` when you're stuck.

## Getting started

```bash
# Type-check all exercises (no output files)
npm run practice:check

# Type-check a single exercise file
npx tsc --noEmit -p typescript-practice/tsconfig.json
```

## IntelliSense (practice mode)

Autocomplete and inline suggestions are **off** while you practice so you can write types yourself.

```bash
# Turn suggestions back on when you're done practicing
npm run practice:hints-on

# Turn them off again
npm run practice:hints-off
```

After toggling, reload the window if needed: **Cmd+Shift+P** → **Developer: Reload Window**.

Type errors still show from `npm run practice:check` and the TypeScript language service.

## Folder layout

```
typescript-practice/
├── exercises/          # Your work — edit these files
│   ├── 01-basics/
│   ├── 02-cypress/
│   └── ...
├── solutions/          # Reference answers (peek only after trying)
└── tsconfig.json       # Practice-specific compiler settings
```

## Suggested path

| # | Topic | Focus |
|---|--------|--------|
| 01 | Basics | Primitives, interfaces, arrays, typed functions |
| 02 | Cypress | Fixtures, `cy.request`, custom commands, intercepts, optional params |
| 03 | Objects & types | `type` vs `interface`, utility types (coming soon) |

## Tips

- Run `npm run practice:check` often — TypeScript errors are part of the learning loop.
- Keep `strict` mode on in this folder; it matches real-world projects better than loose settings.
- Tie concepts back to Cypress: custom command typings in `cypress.d.ts` use the same `interface` and `Chainable` patterns you'll practice here.
