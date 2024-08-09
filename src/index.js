const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Route to render the login page
app.get("/", (req, res) => {
    res.render("login");
});

// Route to render the signup page
app.get("/signup", (req, res) => {
    res.render("signup");
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
