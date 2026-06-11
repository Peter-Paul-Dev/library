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
addBookToLibrary("The Metamorphosis", "Franz Kafka", "45", "Yes");

myLibrary.forEach(book => {
    let card = document.createElement("div")
    card.classList.add("card");

    let cardTitle = document.createElement("h3");
    cardTitle.textContent = book.title;
    card.appendChild(cardTitle); 

    let cardList = document.createElement("ul");
    card.appendChild(cardList);

    let cardAuthor = document.createElement("li");
    cardAuthor.textContent = "Author: " + book.author;
    cardList.appendChild(cardAuthor);

    let cardPages = document.createElement("li");
    cardPages.textContent = "No. of pages: " + book.pages;
    cardList.appendChild(cardPages);

    let cardRead = document.createElement("li");
    cardRead.textContent = "Have read: " + book.read;
    cardList.appendChild(cardRead);

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.value = "yes";
    cardRead.appendChild(checkBox);

    container.appendChild(card);
});