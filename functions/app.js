const express = require('express')
const path = require('path');
const app = express()
const port = 3000
const indexRoute = require("../routes");
const formRoute = require("../routes");
const formSubmission = require("../routes");

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

//console.log('Current working directory:', process.cwd());
console.log('Static files are served from:', path.join(__dirname, '../public'));


app.use("/", indexRoute);
app.use("/new", formRoute);
app.use("/new", formSubmission);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})