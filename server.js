const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// About route
app.get("/about", (req, res) => {
  res.send("About Page");
});

// Contact route
app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
