require("dotenv").config();
const express = require("express");
const path = require("path");

const connectDB = require("./src/config/db");

const app = express();

// Connect to MongoDB
connectDB();

// EJS Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, "src", "public"))); // Serve static files

// Basic Route
app.get("/", (req, res) => {
  res.redirect("/books");
});

// Routes (will be added later)
const bookRoutes = require("./src/routes/bookRoutes");
app.use("/books", bookRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
