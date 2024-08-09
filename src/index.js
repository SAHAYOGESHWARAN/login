const express = require('express');
const pasth = require("path");
const app = express();
const crypt = require("bcrypt");


// use ejs as the viw engine
app.use('view engine','ejs')




const port = 2000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
