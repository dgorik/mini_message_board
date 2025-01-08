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

module.exports = {
    getIndex: (req, res) => {
      res.render("index.ejs",{ title: "Mini Messageboard", messages: messages });
    },

    getForm: (req, res) => {
        res.render("form.ejs");
    },
    
    submitForm: (req, res) => {
        const { messageText, messageUser } = req.body;
        messages.push({text: messageText, user: messageUser, added: new Date()})
        res.redirect("/")
    }
}