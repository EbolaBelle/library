const myLibrary = [
    {title: "Hobbit", author: "Tolkien", pages: "295"}
]
const wrapper = document.querySelector(".wrapper");

function Book(title, author, pages) {
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
        for (const key in book) {
            let field = document.createElement('p');
            field.textContent = book[key];
            div.appendChild(field);
        }
        wrapper.appendChild(div);
    })
}

const HOBBIT = new Book('The Hobbit', 'J.R.R. Tolkien', 295)