var messages = [{
  text: "Hi there!",
  user: "Daniel",
  added: "Friday, January 17, 2025 at 9:07 AM"
}
];

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',hour: 'numeric',minute: 'numeric' };

module.exports = {
    getIndex: (req, res) => {
      res.render("index",{ title: "Mini Messageboard", messages: messages });
    },

    getForm: (req, res) => {
        res.render("form");
    },
    
    submitForm: (req, res) => {
        const { messageText, messageUser } = req.body;
        messages.push({text: messageText, user: messageUser, added: new Date().toLocaleDateString("en-US", options)})
        res.redirect("/")
    }
}