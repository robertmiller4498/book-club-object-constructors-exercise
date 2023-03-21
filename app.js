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
    /* return `<div class="book">
    <p class="title">${item.title}</p>
    <p class="author">written by ${item.author}.</p>
    <p class="pages">${item.pages} pages</p>
    <div class="bookBtns">
        <button class="isreadBtn btn ${item.isread ? '' : 'notRead'}">${item.isread ? 'Read' : 'Not Read'}</button>
        <button class="removeBtn btn">Remove</button>
    </div>
</div>` */
}

//DOM Manipulation that creates individual books.
const libraryContainer = document.getElementById('library-container');
function createNewBookContainer() {
  
    const singleBook = document.createElement('div');
    singleBook.classList.add('singleBook');
    singleBook.dataset.id = myLibrary.forEach((Book,i)=>singleBook.id = i);
    singleBook.innerHTML = myLibrary.at(-1);
    const deletebtn = document.createElement('button');
    deletebtn.classList.add('button-class');
    deletebtn.innerHTML = "Delete book";
    deletebtn.dataset.id = singleBook.id;
    libraryContainer.appendChild(singleBook);
    singleBook.appendChild(deletebtn);
    const readStatusbtn = document.createElement('button');
    readStatusbtn.innerHTML = readCheckResult;
    singleBook.appendChild(readStatusbtn);
    singleBook.appendChild(readStatusbtn);
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
