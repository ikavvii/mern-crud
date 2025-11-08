const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

// Show all books
router.get("/", bookController.getAllBooks);

// Show add form
router.get("/add", bookController.showAddForm);

// Handle add book
router.post("/add", bookController.addBook);

// Show edit form
router.get("/edit/:id", bookController.showEditForm);

// Handle update book
router.post("/edit/:id", bookController.updateBook);

// Delete book
router.post("/delete/:id", bookController.deleteBook);

router.get("/next", bookController.getNextBook);

module.exports = router;
