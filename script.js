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

    cardTitle = document.createElement("h3");
    cardTitle.textContent = book.title;
    card.appendChild(cardTitle); 

    cardList = document.createElement("ul");
    card.appendChild(cardList);

    cardAuthor = document.createElement("li");
    cardAuthor.textContent = book.author;
    card.appendChild(cardAuthor);

    cardPages = document.createElement("li");
    cardPages.textContent = book.pages;
    card.appendChild(cardPages);

    cardRead = document.createElement("li");
    cardRead.textContent = book.read;
    card.appendChild(cardRead);

    container.appendChild(card);
});