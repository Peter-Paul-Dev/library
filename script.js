const myLibrary = [];
const body = document.querySelector("body");
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

Book.prototype.changeReadStatus = function () {
    if (this.read == "yes") {
        this.read = "no";

    } else {
        this.read = "yes";
    }
}

function addBookToLibrary (title, author, pages, read) {
    let bookNew = new Book(title, author, pages, read);
    myLibrary.push(bookNew);
}

addBookToLibrary("Dune", "Frank Herbert", "600", "yes"); 

function createCards () { 
    myLibrary.forEach(book => {
    let card = document.createElement("div")
    card.classList.add("card");
    card.dataset.bookId = book.id;

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

    let readButton = document.createElement("button");
    readButton.textContent = "Change read status";
    cardRead.appendChild(readButton);

    let removeCard = document.createElement("button");
    removeCard.textContent = "-";
    removeCard.classList = "remove-card-button";
    card.appendChild(removeCard);

    readButton.addEventListener("click", () => {
        book.changeReadStatus();
        cardRead.textContent = "Have read: " + book.read;
        cardRead.appendChild(readButton);
    })

    removeCard.addEventListener("click", () => {
        let matchedCard = myLibrary.findIndex(book => book.id == card.dataset.bookId);

        myLibrary.splice(matchedCard, 1);
        container.textContent = "";
        createCards();
    });

    container.appendChild(card);
    });
}

createCards();

let userInputs;


document.querySelector("#add-new-book").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);

    let userInputs = {};

    for (const key of formData.keys()) {
        if (formData.get(key).toString().length > 0) {
            userInputs[key] = formData.get(key).toString();
        }
    }
        
    container.textContent = "";
    addBookToLibrary(userInputs.title, userInputs.author, userInputs.pages, userInputs.read);
    createCards();
});