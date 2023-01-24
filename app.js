


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.bookInfo = function() {
        return [title, author, pages, read];
    }
}

const bookOne = new Book("Barbarian Days", "William Finnegan", 447, false)
const bookTwo = new Book("Kitchen Confidential", "Anthony Bourdain", 312, true)
const bookThree = new Book("Manhattan Beach", "Jennifer Egan", 438, false)

let myLibrary = [];


function addBookToLibrary(obj) {
    return myLibrary.push(obj);
}


//Need to reset the loop after each books submission (etchasketch project)
const libraryContainer = document.getElementById('library-container');

function createNewBookContainer() {
  
    let singleBook = document.createElement('div');
    singleBook.classList.add('bookListDiv');
    singleBook.innerHTML = myLibrary;
    libraryContainer.appendChild(singleBook);
  
}


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

     return console.log(createNewBookContainer(addBookToLibrary(newBookObj.bookInfo())));
}) 

console.log(myLibrary);

//Need to make it so that the loop logs once. (create one book on each submission.)