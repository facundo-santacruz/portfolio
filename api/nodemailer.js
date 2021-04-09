var nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const sendEmail = async({msj, topic, email}) => {
    const from = email;
    const to = process.env.TO_EMAIL
    const subject = topic;
    var transporter =  await nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    console.log(to);
    const mailOptions = {
        from, // sender address
        to, // list of receivers
        subject, // Subject line
        html: 
            `<div style="margin:0;padding:0" dir="ltr" bgcolor="#ffffff">
                <h1>Mensaje enviado por <a href="${from}">${email}</a></h1>
                <h2>Asunto: ${subject} </h2>
                <p>${msj}</p> 
            </div>`
    };
    
    await transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            throw new Error(`El email no ha podido enviarse a ${email}`)
        else
            console.log(info);
        });         
        return {
            from,
            to,
            subject,
            msj,
            text: `Mensaje enviado a ${to}` 
        }
    }
module.exports= {
    sendEmail
}