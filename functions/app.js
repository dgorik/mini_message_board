const express = require('express')
const serverless = require('serverless-http')
const path = require('path');
const app = express()
const router = express.Router();
const indexRoute = require("../routes");
const formRoute = require("../routes");
const formSubmission = require("../routes");


app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

//console.log('Current working directory:', process.cwd());

app.use("/", indexRoute);
app.use("/new", formRoute);
app.use("/new", formSubmission);

app.use('/functions/app', router)

module.exports.handler = serverless(app)