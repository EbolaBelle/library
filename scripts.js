const myLibrary = [
    {title: "The Hobbit", author: "J.R.R. Tolkien", pages: "295"},
    {title: "The Fellowship of the Ring", author: "J.R.R. Tolkien", pages: "300"},
    {title: "Illuminatus!", author: "Robert Anton Wilson", pages: "700"}
]
const wrapper = document.querySelector(".wrapper");
const NEWBOOK = document.querySelector('.new-book');
const dialog = document.querySelector('.new-dialog');
const SUBMIT = document.querySelector('.submit');
const CANCEL = document.querySelector('.cancel');

let removeBtn = document.querySelectorAll('.remove-btn');

libraryDisplay()
removeHandler();

NEWBOOK.addEventListener('click', () => {
    dialog.showModal();
})

CANCEL.addEventListener('click', () => {
    dialog.close();
})

SUBMIT.addEventListener('click', submitBook)

function removeHandler(){
    removeBtn.forEach((button)  => {
        button.addEventListener('click', removeButton)
    })}

function removeButton() {
    this.parentElement.remove();
    myLibrary.splice(this.parentElement.dataset.index, 1);
    removeBtn = document.querySelectorAll('.remove-btn');
    console.log("clikt");
}

function submitBook() {
    let book = new Book(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('pages').value);
    if (book.title === (null || "") || book.author === (null || "") || book.pages === (null || "")) {
        alert("Please enter valid data");
    } else {
        myLibrary.push(book);
        libraryDisplay();
        dialog.close();
    }
}

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function libraryDisplay() {
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.lastChild);
      }
    let index = 0;
    myLibrary.forEach((book) => {        
        let div = document.createElement('div');
        div.dataset.index = myLibrary.indexOf(book);
        for (const key in book) {
            let field = document.createElement('p');
            field.textContent = book[key];
            div.appendChild(field);
        }
        let btn = document.createElement('button');
        btn.type = "button";
        btn.textContent = "Remove";
        btn.setAttribute('class', "remove-btn");
        div.appendChild(btn);
        wrapper.appendChild(div);
    })
    removeBtn = document.querySelectorAll('.remove-btn');
    removeHandler();
}