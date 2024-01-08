const express = require('express')
const app = express()
const port = 3000
const indexRoute = require("./routes");
const formRoute = require("./routes");
const formSubmission = require("./routes");


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


app.use("/", indexRoute);
app.use("/new", formRoute);
app.use("/new", formSubmission);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})