const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody, this is Dayal!");
});
 
module.exports.app = app;
