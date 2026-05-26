# Exercise 02: Cypress + TypeScript

**Goal:** Type the same patterns you use in real Cypress projects — fixtures, `cy.request` responses, custom commands, and route aliases.

This exercise is **type-check only** (`npm run practice:check`). You are not running the Cypress runner here; you are learning the TypeScript side that makes `cypress.d.ts` and `.cy.ts` specs safe.

## Files

| File | Mirrors in real project |
|------|-------------------------|
| `challenge.ts` | Spec helpers, fixture shapes, `cy.request` typing |
| `chainable.d.ts` | `cypress.d.ts` / `cypress/support/index.d.ts` |

## Tasks

### `challenge.ts`

1. **`ExampleFixture`** — Type the fixture object (same shape as `cypress/fixtures/example.json`).
2. **`User` + `assertUsersResponse`** — Type a JSONPlaceholder user and a function that accepts `Cypress.Response<User[]>`.
3. **`RouteConfig`** — Type an intercept config with `method`, `url`, and `alias` (use a union for HTTP methods).
4. **`LoginOptions`** — Type login credentials with optional `rememberMe`.
5. **`registerGetByTestIdCommand`** — Type the `testId` parameter on `Cypress.Commands.add('getByTestId', ...)`.

### `chainable.d.ts`

6. Extend **`Cypress.Chainable`** with `getByTestId(testId: string)` returning `Chainable<JQuery<HTMLElement>>`.

Complete **chainable.d.ts before** task 5, or `Cypress.Commands.add('getByTestId', ...)` will not type-check.

## Check your work

```bash
npm run practice:check
```

## Connect to the repo

When you are done, compare with:

- `cypress.d.ts` — global `Chainable` augmentation
- `cypress/e2e/fundamentals.cy.ts` — `Cypress.Commands.add('login', ...)`
- `cypress/fixtures/example.json` — fixture data you typed in task 1
