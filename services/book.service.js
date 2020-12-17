const Book = require("../models/Book");

function bookService() {
  async function getBooks() {
    return Book.find({});
  }

  async function addBook(title, author, isbn, bookImage) {
    return Book.create({
      Title: title,
      Author: author,
      ISBN: isbn,
      Image: bookImage,
    });
  }

  async function deleteBook(isbn) {
    return Book.deleteOne({ ISBN: parseInt(isbn) });
  }

  return {
    getBooks,
    addBook,
    deleteBook,
  };
}

module.exports = bookService;
