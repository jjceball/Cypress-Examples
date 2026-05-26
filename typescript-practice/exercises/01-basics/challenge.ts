/**
 * Exercise 01: Basics
 *
 * Complete each TODO, then run: npm run practice:check
 */

// TODO 1: Add an explicit string type to `title`
const title: string = "TypeScript Practice";

// TODO 2: Define a `Book` interface with:
//   - title: string
//   - pages: number
//   - read: boolean

interface Book {
  title: string;
  pages: number;
  read: boolean;
}

// TODO 3: Type `books` as an array of `Book`
const books: Book[] = [
{ title: "The Pragmatic Programmer", pages: 352, read: true },
  { title: "Programming TypeScript", pages: 478, read: false },
  { title: "Effective TypeScript", pages: 384, read: false }
];

// TODO 4: Type the parameter and return value; return only unread books
function getUnreadBooks(items: Book[]) {
  return items.filter((book) => !book.read);
}

// --- Do not edit below unless you've finished the TODOs ---
const unread = getUnreadBooks(books);

export { title, books, getUnreadBooks, unread };
