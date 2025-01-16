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
    }
}