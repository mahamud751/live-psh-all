export const contactMail = async () => {
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

    const info = transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    return info;
  } catch (error) {
    next(error);
  }
};
