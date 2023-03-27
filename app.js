//Left off: getting closer to a working function, still need each click to be individualized

//Library Array
let myLibrary = [];

//Constructor function
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.bookInfo = function() {

        let titleContent = document.createElement("p");
        titleContent.innerHTML = this.title;
        titleContent.dataset.id = myLibrary.forEach((Book,i)=>titleContent.id = i);
        const authorContent = document.createElement("p");
        authorContent.innerHTML = author;
        authorContent.dataset.id = myLibrary.forEach((Book,i)=>authorContent.id = i);
        const pagesContent = document.createElement("p");
        pagesContent.innerHTML = pages;
        pagesContent.dataset.id = myLibrary.forEach((Book,i)=>pagesContent.id = i);
        return `<p class="title">${this.title}</p>
        <p class="author">By: ${this.author}</p>
        <p class="pages">${this.pages} pages</p>`;
    }
}



//Function that adds a book to library.
function addBookToLibrary(obj) {
    return myLibrary.push(obj);
}

//DOM Manipulation that creates individual books.
const libraryContainer = document.getElementById('library-container');
function createNewBookContainer() {
    //Individual book div singleBook
    const singleBook = document.createElement('div');
    singleBook.classList.add('singleBook');
    singleBook.dataset.id = myLibrary.forEach((Book,i)=>singleBook.id = i);
    singleBook.innerHTML = myLibrary.at(-1);
    //Delete Button
    const deletebtn = document.createElement('button');
    deletebtn.classList.add('delete-button-class');
    deletebtn.innerHTML = "Delete book";
    deletebtn.dataset.id = singleBook.id;
    libraryContainer.appendChild(singleBook);
    singleBook.appendChild(deletebtn);
    //Read/Not read button
    const readStatusbtn = document.createElement('button');
    readStatusbtn.innerHTML = readCheckResult;
    readStatusbtn.classList.add('read-button-class');
    singleBook.appendChild(readStatusbtn);
    readStatusbtn.addEventListener('click', function() {
        if(readStatusbtn.innerHTML === "Read") {
            readStatusbtn.innerHTML = "Not yet read.";
        } else {
            readStatusbtn.innerHTML = "Read";
        }
    })
    //delete button click function
    deletebtn.addEventListener('click', function removeBook(i) {
        myLibrary.splice(i, 1);
        singleBook.remove();
	    return myLibrary;
    }) 
}

//Function that shows the form to create a new book after clicking.
document.getElementById("new-book-btn").onclick = function() {
document.getElementById("formElement").style.display = 'block';
}

//Function that submits the form and creates a new book using user input from the forms questions.
document.addEventListener('submit', function newBookFunction(e) {
    e.preventDefault()
    const newBookForm = e.target
    const newTitle = newBookForm.title.value
    const newAuthor = newBookForm.author.value
    const newPages = newBookForm.pages.value
    const newRead = createReadBtn(readCheck);
        const newBookObj = new Book(newTitle, newAuthor, newPages, newRead)

    const form = document.getElementById('formElement');
    form.reset();

     return createNewBookContainer(addBookToLibrary(newBookObj.bookInfo())); 
}) 

//Function that creates the readStatusbtn by checking for user input on this.read.
const readCheck = document.getElementById("#read");
let readCheckResult = "";
function createReadBtn(readCheck) {
     let readBoxChecked = document.querySelector('#read:checked') !== null;

   if (readBoxChecked == true) {
        return readCheckResult="Read";
    } else {
        return readCheckResult="Not yet read.";
    }
}

console.log(myLibrary);

//Need to hook up each Book element to it's html counterpart.(ex. title => p class = "title")
//With that, hide the newRead variable from displaying.
//Repair CSS and work on responsiveness.
//Extra: Create a pencil button to edit author or title on each singleBook.
