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

function displayBook(x){
    const div = document.getElementById("booklist"); 
    const bookdiv = document.createElement("div");
    bookdiv.classList.add("book-entry");

    const p = document.createElement("p");
    p.textContent = `Title: ${x.title} | Author: ${x.author} | Pages: ${x.pages} | Read Status: Unread`;    
    
    const btn2 = document.createElement("button");
    btn2.textContent = "Remove Book from Library";
    btn2.dataset.id = x.id;
    btn2.addEventListener("click", () => {
        const index = myLibrary.findIndex(book => book.id == Number(btn2.dataset.id));
        myLibrary.splice(index, 1);

        bookdiv.remove();
    })

    const btn3 = document.createElement("button")
    btn3.textContent = "Mark as Read"
    btn3.addEventListener("click", () => {
        x.readStatus = 1;
        p.textContent = `Title: ${x.title} | Author: ${x.author} | Pages: ${x.pages} | Read Status: Read`;    
    })
    bookdiv.appendChild(p);
    bookdiv.appendChild(btn2);
    bookdiv.appendChild(btn3);

    div.appendChild(bookdiv);
}

const button1 = document.getElementById("button1")
button1.addEventListener("click", () => {
    let title = prompt("Enter book title: ");
    let author = prompt("Enter book author: ");
    let pages = prompt("Enter number of pages: ");
    const book = new Book(title, author, pages, 0, randomID());
    addBookToLibrary(book);
    displayBook(book);
});


/*
function test(){
    const book1 = new Book("1984", "George Orwell", 328, "Unread", randomID());
    addBookToLibrary(book1);
    displayBook();
}
test();
*/