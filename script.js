// DOM elements
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const unread = document.querySelector("#unread");
const submit = document.querySelector("#button");
// let status;

// Events
submit.addEventListener("click", addBookToLibrary);

// Functions
let myLibrary = [];

class Book {
  constructor(author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
  }
}

// Adding to array
function addBookToLibrary(event) {
  event.preventDefault();
  let status = null;
  if (read.checked) {
    status = read.value;
  } else {
    status = unread.value;
  }
  const book = new Book(author.value, title.value, pages.value, status);
  myLibrary.push(book);
  //   console.log(myLibrary);

  displayBooks();
}

//Adding the myLibrary to the DOM
function displayBooks() {
  const section = document.createElement("section");
  document.querySelector("main").append(section);
  myLibrary.forEach(({ author, title, pages, status }) => {
    section.innerHTML = `<div>
    <h2>${author}</h2>
    <p>${title}</p>
    <p>${pages}</p>
    <p>${status}</p>
    <button>Delete</button>
</div>`;
  });
}
