const express= require("express");
const nodemailer =require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: true, 
    auth: {
      user: "christypjubi@gmail.com",
      pass: "998110ab",
    },
  });
    const mail = ({
      from: '"Chris" <christypjubi@gmail.com>', 
      to: "christeenajubi033@gmail.com", 
      subject: "Sending through auto code", 
      text: "hey there this is an auto generated mail using nodemailer", 
      html: "<b>Hello world!!!!!</b>", 
    });

    transporter.sendMail(mail, (error, info)=>{
        if(error){
            console.error(error);
        }else{
            console.log("Email sent:" + info.response)
        }
    })
  

  

const app =express();
app.listen(8080, ()=> console.log("server is up and running on port 8080"));