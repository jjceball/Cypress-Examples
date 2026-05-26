/**
 * Solution 01: Basics (reference only — try the exercise first)
 */

const title: string = "TypeScript Practice";

interface Book {
  title: string;
  pages: number;
  read: boolean;
}

const books: Book[] = [
  { title: "The Pragmatic Programmer", pages: 352, read: true },
  { title: "Programming TypeScript", pages: 478, read: false },
  { title: "Effective TypeScript", pages: 384, read: false },
];

function getUnreadBooks(items: Book[]): Book[] {
  return items.filter((book) => !book.read);
}

const unread = getUnreadBooks(books);

export { title, books, getUnreadBooks, unread };
