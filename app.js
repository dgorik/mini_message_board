const express = require('express')
const app = express()
const port = 3000
const indexRoute = require("./routes");

app.set('view engine', 'ejs');

app.use("/", indexRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})