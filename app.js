const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Route for the index page (home page)
app.get("/", (req, res) => {
  res.render("index"); // This should render index.ejs
});

// Route for the success page after registration
app.get("/success", (req, res) => {
  res.render("success"); // This should render success.ejs
});

// Route for handling registration POST
app.post("/register", (req, res) => {
  const { username, password, confirmPassword } = req.body;

  // Backend validation
  if (!username || !password || !confirmPassword) {
    return res.status(400).send("All fields are required.");
  }

  if (password !== confirmPassword) {
    return res.status(400).send("Passwords do not match.");
  }

  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).send("Password must have at least 6 characters, 1 number, and 1 special character.");
  }

  // Successful registration, redirect to /success
  res.redirect("/success"); // This should redirect to the success page
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;