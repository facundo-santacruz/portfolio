var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors())

app.get('/', function (req, res) {
    console.log(req)
  res.send('Hola mundo');
});
 
app.listen(4000, function () {
  console.log('Example app listening on port 3000!');
});