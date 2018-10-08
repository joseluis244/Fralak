var nodemailer = require('nodemailer');

// listen for token updates (if refreshToken is set)
// you probably want to store these to a db


// login
var transporter = nodemailer.createTransport({
    service: 'gmail',
  auth: {
    type: 'oauth2',
    user: 'jose.luis244@gmail.com',
    clientId: '830374090859-031j5kjnbiadgkf317r7feqgb4df0u38.apps.googleusercontent.com',
    clientSecret: 'JlFzYCG-CXA0aIJVRdLZSp7e',
    refreshToken: '1/tRL-wYzr2db7GHVLQDXhR1y04b19ihkQvYYFQGeKIpM',
    accessToken: 'ya29.Glv3BS7nD1sVQVMmuqzN_3NVfhXnA75GXX9nkC7f7DioeojTDgKn3Z6eNd9ccd2y2K4Qpr-zIB_3apPYHUwjDhphDFJ_IGocjqTOvgNUw7uSStGWmIzicGf08YVN'
  }
});

var mailOptions = {
  from:'jose.camacho@fralak.com.bo',
  to:'jose.luis244@gmail.com',
  subject:'test',
  text:'asdasd'
}

transporter.sendMail(mailOptions,function(err,res){
  console.log(err);
});