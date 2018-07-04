const ics = require('ics');
const fs = require('fs');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jose.luis244@gmail.com',
    pass: 'Camachomm310188'
  }
});

const event = {
    start: [2018, 5, 30, 6, 30],
    duration: { hours: 6, minutes: 30 },
    title: 'Bolder Boulder',
    description: 'Annual 10-kilometer run in Boulder, Colorado',
    location: 'Folsom Field, University of Colorado (finish line)',
    url: 'http://www.bolderboulder.com/',
    geo: { lat: 40.0095, lon: 105.2669 },
    categories: ['10k races', 'Memorial Day Weekend', 'Boulder CO'],
    status: 'CONFIRMED',
    organizer: { name: 'Admin', email: 'Race@BolderBOULDER.com' },
  }

  ics.createEvent(event,function(error,value){

    var mailOptions = {
      from: 'jose.luis244@gmail.com',
      to: 'jose.luis244@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!',
      icalEvent: {
        filename: 'invitation.ics',
        method: 'request',
        content: value
      }
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

  });
  