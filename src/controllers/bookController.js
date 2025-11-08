const Book = require("../models/bookModel");

// Fetch all books
exports.getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.render("list", { books });
};

// Show add form
exports.showAddForm = (req, res) => {
  res.render("add");
};

// Add book
exports.addBook = async (req, res) => {
  await Book.create(req.body);
  res.redirect("/books");
};

// Show edit form
exports.showEditForm = async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render("edit", { book });
};

// Update book
exports.updateBook = async (req, res) => {
  await Book.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/books");
};

// Delete book
exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.redirect("/books");
};

exports.getNextBook = (req, res) => {
    res.render("welcome");
}