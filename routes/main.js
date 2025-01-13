const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];


const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");


router.get("/", homeController.getIndex);


module.exports = router;

