


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

let myLibrary = [bookOne.bookInfo(), bookTwo.bookInfo(), bookThree.bookInfo()];
/* in here we'll write a .forEach method to loop throgh myLibrary. */
    /* thinking of how to do so. we'll use the .push() method to add the users input to the
    end of our array. */
    /* Now we need to figure out how we'll take in user input. for me, this may be easier to create
    the button in html first. */
    /* For right now, we are leaving this function. It will need to be worked out but it will work
    as a placeholder for now. */

// Need to find way to make prompt in html to then create an object with info provided.

function addBookToLibrary() {
    return myLibrary.push();
}

/*  let userInput = ["Thesis", "Rob Miller", 666, true]; 
 const userInputObject = new Book(userInput);

function addBookToLibrary(userInput) {
    return myLibrary.push(userInput);
}
console.log(addBookToLibrary(userInput));
console.log(myLibrary); */
/* ev.preventDefault(); */ // to stop the form from submitting. -We'll use this later for step 3.


//Loop through myLibrary array and make them appear that way, not the main three.


//This display below loops/adds items to array properly. Trying a for loop for better display
/* let txt = "";
for (let x in myLibrary) {
    txt += myLibrary[x] + " ";
  };

  document.getElementById("library-container").innerHTML = txt; */

//Oh hell ya
const libraryContainer = document.getElementById('library-container');
  
  for(let i=0; i < myLibrary.length; i += 1){
    let singleBook = document.createElement('div');
    singleBook.classList.add('bookListDiv');
    singleBook.innerHTML = myLibrary[i];
    libraryContainer.appendChild(singleBook);
  }



document.getElementById("new-book-btn").onclick = function() {
document.getElementById("formElement").style.display = 'block';
}

//We now need this to return the book.Info for our object, not the new Book.
document.addEventListener('submit', function(e) {
    e.preventDefault()
    const newBookForm = e.target
    const newTitle = newBookForm.title.value
    const newAuthor = newBookForm.author.value
    const newPages = newBookForm.pages.value
    const newRead = newBookForm.read.value
        const newBookObj = new Book(newTitle, newAuthor, newPages, newRead)

     return console.log(myLibrary.push(newBookObj.bookInfo()));
}) 

console.log(myLibrary);

/* What are we trying to do.
1.) Collect four answers from user input from our form.
2.) Create an object using those four answers from the user submitted form.
3.) Log that object and set it equal to userInput so that our addBookToLibrary function works.
4.) An alternative to 3 would be to apply that function inside our form funciton, but try it without first. */
/* 
let userInput = new Book(
    document.getElementById('new-title').value,
    document.getElementById('new-author').value,
    document.getElementById('new-pages').value,
    document.getElementById('new-read').value, */