var express = require('express');
var app = express();
var cors = require('cors');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { sendEmail} = require('./nodemailer');


app.set('port', process.env.PORT || 3001)
app.use(morgan('tiny'))
app.use(cors())
app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.get('/sendMsg', async (req, res) => {
  console.log(req.query)
  const state = await sendEmail(req.query) 
  res.send(state).status(200);
});

app.get('/download',  async(req, res, next) => {
  // res.contentType("application/pdf").download(`${__dirname.slice(0,-4)}/client/public/CV Facundo Santacruz.pdf`, err => {
  //   if(err)res.status(404)
  //   console.log("CV enviado")
  // })
    // File
    const fileName = "CV Facundo Santacruz.pdf"
    const filePath = `${__dirname.slice(0,-4)}/client/public/CV Facundo Santacruz.pdf`

    // File options
     const options = {
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true,
            'content-disposition': "attachment; filename=" + fileName, // gets ignored
            'content-type': "application/pdf"
        }
    }

    try {
        res.download(
            filePath,
            fileName,
            options
        );
        console.log("File sent successfully!");
    }
    catch (error) {
        console.error("File could not be sent!");
        next(error);
    }
} )


 
app.listen(app.get('port'), function () {
  console.log(`Example app listening on port ${app.get('port')}!`);
});