const myLibrary = [];
const container = document.querySelector(".container");

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary (title, author, pages, read) {
    let bookNew = new Book(title, author, pages, read);
    myLibrary.push(bookNew);
}

addBookToLibrary("Dune", "Frank Herbert", "~600", "Yes");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "~300", "No");

myLibrary.forEach(book => {
    let card = document.createElement("div")
    card.classList.add("card");
    card.textContent = book.title + " " + book.author; 

    container.appendChild(card);
});