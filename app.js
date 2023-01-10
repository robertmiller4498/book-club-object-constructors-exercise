function bookSelection(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.bookInfo = function() {
        return [title, author, pages, read];
    }
}

const bookOne = new bookSelection("Barbarian Days", "William Finnegan", 447, false)
const bookTwo = new bookSelection("Kitchen Confidential", "Anthony Bourdain", 312, true)
const bookThree = new bookSelection("Manhattan Beach", "Jennifer Egan", 438, false)

console.log(bookOne.bookInfo());
console.log(bookTwo.bookInfo());
console.log(bookThree.bookInfo());
