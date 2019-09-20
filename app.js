const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from IBM Cloud Pak for Applications!");
});
 
module.exports.app = app;
