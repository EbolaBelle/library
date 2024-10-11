const myLibrary = []
const wrapper = document.querySelector(".wrapper");
const NEWBOOK = document.querySelector('.new-book');
const dialog = document.querySelector('.new-dialog');
const SUBMIT = document.querySelector('.submit');
const CANCEL = document.querySelector('.cancel');
const FORM = document.querySelector('#library');

NEWBOOK.addEventListener('click', () => {
    dialog.showModal();
})

CANCEL.addEventListener('click', () => {
    dialog.close();
})

SUBMIT.addEventListener('click', submitBook)

function removeHandler(buttons){
    buttons.forEach((button)  => {
        button.addEventListener('click', removeButton)
    })}

function toggleHandler(buttons) {
    buttons.forEach((button)  => {
        button.addEventListener('click', toggleButton)
    })
}

function removeButton() {
    this.parentElement.remove();
    myLibrary.splice(this.parentElement.dataset.index, 1);
    removeBtn = document.querySelectorAll('.remove-btn');
    libraryDisplay();
}

function toggleButton() {
    myLibrary[this.parentElement.dataset.index].readToggle();
}

function submitBook() {
    let book = new Book(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('pages').value, document.querySelector('input[name="read"]:checked').value);
    if (book.title === (null || "") || book.author === (null || "") || book.pages === (null || "")) {
        alert("Please enter valid data");
    } else {
        myLibrary.push(book);
        libraryDisplay();
        FORM.reset();
        dialog.close();
    }
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.readToggle = function() {
       this.read === "Read" 
       ? this.read = "Not Read"
       : this.read = "Read";
       libraryDisplay();
    }
}

function clearDisplay() {
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.lastChild);
      }
}

function buttonHandler() {
    let removeBtn = document.querySelectorAll('.remove-btn');
    removeHandler(removeBtn);
    let toggleBtn = document.querySelectorAll('.read-toggle');
    toggleHandler(toggleBtn);
}

function printData() {
    let index = 0;
    myLibrary.forEach((book) => {        
        let div = document.createElement('div');
        div.dataset.index = myLibrary.indexOf(book);
        let i = 0;
        for (const key in book) {
            if (i === 4) {
                break;
            }
            let field = document.createElement('p');
            field.textContent = book[key];
            div.appendChild(field);
            i++;
        }
        createButtons(div);
    })
}

function createButtons(parent) {
    let btn = document.createElement('button');
        btn.type = "button";
        btn.textContent = "Remove";
        btn.setAttribute('class', "remove-btn");
        parent.appendChild(btn);
        let READ = document.createElement('button')
        READ.type = "button";
        READ.textContent = "Read/Not Read";
        READ.setAttribute('class', 'read-toggle');
        parent.appendChild(READ);
        wrapper.appendChild(parent);
}

function libraryDisplay() {
    clearDisplay();
    printData();
    buttonHandler();
}