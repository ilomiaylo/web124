// Part 1: Book Data

const books = [
    {
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        pages: 96
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        pages: 208
    },
    {
        title: "1984",
        author: "George Orwell",
        pages: 328
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        pages: 432
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 180
    }
];

// Part 2: Console Output

console.log("BOOK LIST");

books.forEach((book) => {
    console.log(book);
});


console.log("DOM TREE EXPLORATION");

console.log(document);

console.log(document.body);

console.log(document.body.firstChild);

console.log(document.body.children);

// part4 



console.log("WALKING THE DOM");

const bookList = document.body.children[2];

console.log("UL element:", bookList);

const firstBook = bookList.children[0];

console.log("LI element:", firstBook);

console.log("Parent of LI:", firstBook.parentElement);

console.log(
    "Sibling of LI:",
    firstBook.nextElementSibling
);

// part 5 



console.log("NODE PROPERTIES");

console.log(
    "Text inside LI:",
    firstBook.textContent
);

console.log(
    "Node type:",
    firstBook.nodeType
);

console.log(
    "Node name:",
    firstBook.nodeName
);

 // Part 6 - Styles & Classes

console.log("STYLES & CLASSES");

const pageHeading = document.body.children[0];

console.log(
    "Heading class name:",
    pageHeading.className
);

/*
What is the DOM tree?
The DOM tree shows the structure of a web page.

What is a node in the DOM?
A node is an element or text on a web page.

What is the difference between a parent and a child node?
A parent has child elements inside it.

What is a sibling node?
Sibling nodes have the same parent.
*/