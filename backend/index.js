var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config()

var transport = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    type: "login",
    user: process.env.USER,
    pass: process.env.PASS,
  },
};
var transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});
router.post("/send", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;
  var mail = {
    from: name,
    to: "joshua.hsu.dev@gmail.com", 
    subject: "New Message from Contact Form",
    text: content,
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
      transporter.sendMail(
        {
          from: process.env.USER,
          to: email,
          subject: "Submission was successful",
          text: `Thank you for contacting me!\n\nForm details\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        },
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Message sent: " + info.response);
          }
        }
      );
    }
  });
});
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3002);
