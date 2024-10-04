const myLibrary = []
const wrapper = document.querySelector(".wrapper");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    let title = prompt("Title:");
    let author = prompt('Author:');
    let pages = prompt('Page count:');
    if (title === (null || "") || author === (null || "") || pages === (null || "")) {
        alert("Please enter valid data");
        addBookToLibrary()
    } else {
        let book = new Book(title, author, pages);
        myLibrary.push(book);
    }
}

function libraryDisplay() {
    myLibrary.forEach((book) => {
        let div = document.createElement('div');
        let title = document.createElement('p');
        let author = document.createElement('p');
        let pages = document.createElement('p');
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        wrapper.appendChild(div);
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
    })
}

const HOBBIT = new Book('The Hobbit', 'J.R.R. Tolkien', 295)