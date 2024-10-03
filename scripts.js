const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages`
    }
}

function addBookToLibrary() {
    let title = prompt("Title:");
    let author = prompt('Author:');
    let pages = prompt('Page count:');
    let book = new Book(title, author, pages);
    myLibrary.push(book);
}

function libraryDisplay() {
    
}

const HOBBIT = new Book('The Hobbit', 'J.R.R. Tolkien', 295)