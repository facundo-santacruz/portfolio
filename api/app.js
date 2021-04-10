var express = require('express');
var app = express();
var cors = require('cors');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { sendEmail} = require('./nodemailer')

app.set('port', process.env.PORT || 3001)
app.use(morgan('tiny'))
app.use(cors())
app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());
app.get('/sendMsg', async (req, res) => {
  console.log(req.query)
  const state = await sendEmail(req.query) 
  res.send(state).status(200);
});
 
app.listen(app.get('port'), function () {
  console.log(`Example app listening on port ${app.get('port')}!`);
});