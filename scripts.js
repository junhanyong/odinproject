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
    for (let i = 0; i < myLibrary.length; i++){
        console.log(`Title: ${myLibrary[i].title} ID: ${myLibrary[i].id}\n`);
    }
}

const button = document.getElementById("button1")
button.addEventListener("click", () => {
    prompt()
});

/*
function test(){
    const book1 = new Book("1984", "George Orwell", 328, "Unread", randomID());
    addBookToLibrary(book1);
    displayBook();
}
test();
*/