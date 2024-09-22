const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  // console.log("Email: ", process.env.SMTP_MAIL);
  // console.log("Password: ", process.env.SMTP_PASSWORD);
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    service: process.env.SMTP_SERVICE,

    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from:  process.env.SMTP_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

//   await transporter.sendMail(mailOptions);
try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

module.exports = sendEmail;
