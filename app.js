const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from IBM Cloud Pak for Applications, developed on Kabanero!!!");
});
 
module.exports.app = app;
