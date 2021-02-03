const members = [
  {
    id: 1,
    firstName: "Aziz",
    lastName: "AlSaffar",
    slug: "aziz-alsaffar",
    currentlyBorrowedBooks: [3],
    membership: "gold", // can borrow 3 books
  },
  {
    id: 2,
    firstName: "Hashim",
    lastName: "Behbehani",
    slug: "hashim-behbehani",
    currentlyBorrowedBooks: [5],
    membership: "gold", // can borrow 3 books
  },
  {
    id: 3,
    firstName: "Alhamza",
    lastName: "Abdulmonem",
    slug: "alhmaza-bdulmonem",
    currentlyBorrowedBooks: [1, 2],
    membership: "silver", // can borrow 2 books
  },
  {
    id: 5,
    firstName: "Laila",
    lastName: "AlKandery",
    slug: "laila-alkandery",
    currentlyBorrowedBooks: [7, 8],
    membership: "platinum", // can borrow 5 books
  },
];

export default members;
