// DOM elements
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const unread = document.querySelector("#unread");
const submit = document.querySelector("#submit");
//create
const main = document.createElement("main");
const section = document.createElement("section");

// Events
submit.addEventListener("click", addBookToLibrary);

// Variables
let myLibrary = [];
let status = "";

// Functions
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

  // let status = null;

  if (read.checked) {
    status = read.value;
  }
  if (unread.checked) {
    status = unread.value;
  }

  const book = new Book(author.value, title.value, pages.value, status);

  myLibrary.push(book);

  // Rendering section only once
  if (!main.contains(section)) document.querySelector("main").append(section);

  displayBooks();
  author.value = "";
  title.value = "";
  pages.value = "";
}

//Adding the myLibrary to the DOM
function displayBooks() {
  if (
    author.value !== "" &&
    title.value !== "" &&
    pages.value !== "" &&
    status !== ""
  ) {
    const article = document.createElement("article");
    section.append(article);
    section.classList.add("section");

    myLibrary.forEach(({ author, title, pages, status }) => {
      article.innerHTML = `<h2>${author}</h2>
    <p>${title}</p>
    <p>${pages} ${pages == 1 ? "page" : "pages"}</p>
    <p id="status">${status}</p>
    <button id="delete">Delete</button>`;
    });

    //Removing book when clicked delete button
    deleteBook();
    changeStatus();
  } else {
    alert("Please fill the form");
  }
}

function deleteBook() {
  document.querySelectorAll("#delete").forEach((button) => {
    button.addEventListener("click", (event) =>
      event.target.parentElement.remove()
    );
  });
}

function changeStatus() {
  document.querySelectorAll("#status").forEach((status) => {
    status.addEventListener("click", (event) => {
      if (event.target.innerText === "read") {
        event.target.innerText = "unread";
      }
      if (event.target.innerText === "unread") {
        event.target.innerText = "read";
      }
    });
  });
}
