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
    singleBook.classList.add('bookListDiv');
    singleBook.dataset.id = myLibrary.forEach((singleBook,i)=>singleBook.id = i);
    singleBook.innerHTML = myLibrary.at(-1);
    let deletebtn = document.createElement('button');
    deletebtn.innerHTML = "Delete book";
    /* deletebtndotdataset.id = myLibrarydotindex; */
    libraryContainer.appendChild(singleBook)
    singleBook.appendChild(deletebtn);


//Code below deletes all books, need to workshop so that it only deletes the selected book
//singleBook will need to be incorporated somehow.

//When clicked - we need to on the click, remove
libraryContainer.addEventListener('click', function removeBook(e) {
    if (e.target.classList.contains('bookListDiv')) {
      let eachIndex = e.target.parentElement.rowIndex - 1
      console.log(eachIndex)
      e.target.parentElement.remove()
      //displayBooks(myLibrary[myLibrary.length-1])

      myLibrary.indexOf((singleBook) => {
        if(myLibrary.length > 0) {
          myLibrary.splice[eachIndex, 1]
        }
      })
    }
    return myLibrary
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

/* libraryContainer.addEventListener('click', function removeBook(e) {
    if (e.target.classList.contains('deleteBookBtn')) {
      let eachIndex = e.target.parentElement.rowIndex - 1
      console.log(eachIndex)
      e.target.parentElement.remove()
      //displayBooks(myLibrary[myLibrary.length-1])

      myLibrary.indexOf((singleBook) => {
        if(myLibrary.length > 0) {
          myLibrary.splice[eachIndex, 1]
        }
      })
    }
    return myLibrary
  })
} */