function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.bookInfo = function() {
        return [title, author, pages, read];
    }
}

let myLibrary = [];



function addBookToLibrary(obj) {
    return myLibrary.push(obj);
}


//Need to reset the loop after each books submission (etchasketch project)
const libraryContainer = document.getElementById('library-container');

function createNewBookContainer() {
  
    let singleBook = document.createElement('div');
    singleBook.classList.add('bookListDiv');
    singleBook.dataset.id = myLibrary.forEach((singleBook,i)=>singleBook.id = i);
    singleBook.innerHTML = myLibrary.at(-1);
    let deletebtn = document.createElement('button');
    deletebtn.classList.add('deleteBookBtn');
    deletebtn.innerHTML = "Delete book";
    libraryContainer.appendChild(singleBook)
    libraryContainer.appendChild(deletebtn);
  
}

/* document.addEventListener('click', function(e) {
    if (newBookObj.dataset.id === singleBook.dataset.id) {
        return e.target.getElementByClass('bookListDiv').remove();
    }
}) */


document.getElementById("new-book-btn").onclick = function() {
document.getElementById("formElement").style.display = 'block';
}

//New book creator.
function addBookToLibrary(obj) {
    return myLibrary.push(obj);
}

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


//Delete book button work
//We need to figure out how to target the object the delete button is attached to.
// a possible way to do this could be targeting the object by the array index in myLibrary
// my thought currently is that we have different buttons on each book, so I want to think in
// (cont) terms of using each button for it's individual book.
// create a function that if deletebtn clicked then deletebtn[index] will be deleted?

// Delete the object.onclick() if objects mylibrary index === deletebtn mylibrary index


//Pretty obvious error trying to access newBookObj - every click it is running this function
/* document.addEventListener('click', function(e) {
    if (newBookObj.dataset.id === singleBook.dataset.id) {
        return e.target.getElementByClass('bookListDiv').remove();
    }
}) */


console.log(myLibrary);

//Need to make it so that the loop logs once. (create one book on each submission.