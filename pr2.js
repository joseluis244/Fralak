var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jose.luis244@gmail.com',
    pass: 'Camachomm310188'
  }
});

var mailOptions = {
  from: 'jose@gmail.com',
  to: 'jose_luis244@hotmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});