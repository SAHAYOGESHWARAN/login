const express = require('express');
const pasth = require("path");
const app = express();
const crypt = require("bcrypt");


// use ejs as the viw engine
app.use('view engine','ejs')

app.get("/",(req,res) => {
    res.render("login");
});

app.get("/signup", (req,res) => {
    res.render("signup");
})



const port = 2000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
