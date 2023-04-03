const nodemailer = require("nodemailer");
const token = require("../middlewares/auth.js");
const { MAILER_EMAIL, MAILER_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: MAILER_EMAIL,
    pass: MAILER_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter
  .verify()
  .then(() => {
    console.log("conecta'o mijo");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = transporter;
