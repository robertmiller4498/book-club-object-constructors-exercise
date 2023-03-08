//Left off: getting closer to a working function, still need each click to be individualized

//Constructor function
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.bookInfo = function() {
        return [title, author, pages, read];
    }
}

//Library Array
let myLibrary = [];

//Function that adds a book to library.
function addBookToLibrary(obj) {
    return myLibrary.push(obj);
}

//DOM Manipulation that creates individual books.
const libraryContainer = document.getElementById('library-container');
function createNewBookContainer() {
  
    let singleBook = document.createElement('div');
    singleBook.classList.add('singleBook');
    singleBook.dataset.id = myLibrary.forEach((Book,i)=>singleBook.id = i);
    singleBook.innerHTML = myLibrary.at(-1);
    let deletebtn = document.createElement('button');
    deletebtn.classList.add('button-class');
    deletebtn.innerHTML = "Delete book";
    deletebtn.dataset.id = singleBook.id;
    libraryContainer.appendChild(singleBook)
    singleBook.appendChild(deletebtn);

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
document.addEventListener('submit', function(e) {
    e.preventDefault()
    const newBookForm = e.target
    const newTitle = newBookForm.title.value
    const newAuthor = newBookForm.author.value
    const newPages = newBookForm.pages.value
    const newRead = newBookForm.read.value
        const newBookObj = new Book(newTitle, newAuthor, newPages, newRead)
        
    
    const form = document.getElementById('formElement');
    form.reset();

     return console.log(createNewBookContainer(addBookToLibrary(newBookObj.bookInfo())));
}) 


console.log(myLibrary);
