const myLibrary = []
function Book(title,author,pages,readStatus, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.id = id;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function randomID(){
    id = crypto.randomUUID();
    return id
}

function displayBook(){
    const div = document.getElementById("booklist")
    for (let i = 0; i < myLibrary.length; i++){
        const p = document.createElement("p");
        p.textContent = `Title: ${myLibrary[i].title} ID: ${myLibrary[i].id}\n`;
        div.appendChild(p);
    }
}

const button = document.getElementById("button1")
button.addEventListener("click", () => {
    let title = prompt("Enter book title: ");
    let author = prompt("Enter book author: ");
    let pages = prompt("Enter number of pages: ");
    const book = new Book(title, author, pages, 0, randomID());
    addBookToLibrary(book);
    displayBook();
});
/*
function test(){
    const book1 = new Book("1984", "George Orwell", 328, "Unread", randomID());
    addBookToLibrary(book1);
    displayBook();
}
test();
*/