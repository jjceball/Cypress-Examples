# Exercise 01: Basics

**Goal:** Use explicit types, an interface, a typed array, and a typed function.

## Tasks

Open `challenge.ts` and complete each `TODO`. When `npm run practice:check` passes with no errors, you're done.

1. Annotate `title` as a `string`.
2. Define a `Book` interface with `title`, `pages`, and `read`.
3. Type the `books` array as `Book[]`.
4. Implement `getUnreadBooks` so it accepts `Book[]` and returns only books where `read` is `false`.

## Stretch (optional)

- Add an optional `author?: string` to `Book` and handle it in a `describeBook` function.
