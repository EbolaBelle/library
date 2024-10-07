const myLibrary = [
    {title: "The Hobbit", author: "J.R.R. Tolkien", pages: "295"},
    {title: "The Fellowship of the Ring", author: "J.R.R. Tolkien", pages: "300"},
    {title: "Illuminatus!", author: "Robert Anton Wilson", pages: "700"}
]
const wrapper = document.querySelector(".wrapper");
const NEWBOOK = document.querySelector('.new-book');

NEWBOOK.addEventListener('click', addBookToLibrary)

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
        libraryDisplay();
    }
}

function libraryDisplay() {
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.lastChild);
      }
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

libraryDisplay()

const HOBBIT = new Book('The Hobbit', 'J.R.R. Tolkien', 295)