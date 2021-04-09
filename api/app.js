var express = require('express');
var app = express();
var cors = require('cors');
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(morgan('tiny'))
app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());
app.get('/', function (req, res) {
  console.log(req.query)
  console.log(req.params)
  res.send(req.query).status(200);
});
 
app.listen(4000, function () {
  console.log('Example app listening on port 3000!');
});