const express = require("express");
const router = express.Router();
const indexRoute = require("../controllers/home");
const formRoute = require("../controllers/home");
const formSubmission = require("../controllers/home");



router.get("/", indexRoute.getIndex);
router.get("/new", formRoute.getForm);
router.post("/new", formSubmission.submitForm);


module.exports = router;

