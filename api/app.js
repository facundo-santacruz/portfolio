var express = require('express');
var app = express();
var cors = require('cors');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { sendEmail} = require('./nodemailer')

app.use(morgan('tiny'))
app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());
app.get('/sendMsg', async (req, res) => {
  console.log(req.query)
  const state = await sendEmail(req.query) 
  res.send(state).status(200);
});
 
app.listen(4000, function () {
  console.log('Example app listening on port 3000!');
});