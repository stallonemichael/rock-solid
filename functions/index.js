const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.submit = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== 'POST') {
      return;
    }

    const mailOptions = {
      from: req.body.email,
      replyTo: req.body.email,
      to: gmailEmail,
      subject: `${req.body.name} submitted a quote request!`,
      text: req.body.message,
      html: `<p style='color: #4193cb; font-size: 14px; font-weight: bold;'>Name: ${req.body.name}</p>
      <p style='color: #4193cb; font-size: 14px; font-weight: bold;'>Phone #: ${req.body.phone}</p>
      <p style='color: #4193cb; font-size: 14px; font-weight: bold;'>Email: ${req.body.email}</p>
      <p style='color: #4193cb; font-size: 14px; font-weight: bold;'>Message: ${req.body.message}</p>`,
    };

    mailTransport.sendMail(mailOptions);
    console.log('New email sent to:', gmailEmail);
    res.status(200).send({ isEmailSent: true });
  });
});
