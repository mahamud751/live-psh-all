import Contact from "../models/Contact";
import nodemailer from "nodemailer";
export const createContact = async (req, res, next) => {
  const newContact = new Contact(req.body);
  try {
    // Contact Mail to Manager
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "alaminbamna08@gmail.com",
        pass: "qesfajhmrfhkfnbo",
      },
    });

    const mailOptions = {
      from: "alaminbamna08@gmail.com",
      to: `mohammad.alaminh08@gmail.com,${req?.body?.email}`,
      subject: "Contact",
      html: "<h1>Welcome</h1><p>Thanks For Order!</p>",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    const contactSave = await newContact.save();

    res.status(200).json(contactSave);
  } catch (error) {
    next(error);
  }
};
