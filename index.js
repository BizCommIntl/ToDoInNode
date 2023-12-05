// index.js
// const express = require('express')
// const dotenv  = require("dotenv")
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express()
const port = process.env.PORT || 4000;
const developer = process.env.USERNAME_DEVELOPER

app.set('view engine', 'hbs');



// app.get('/home', (req, res) => {
app.get('/', (req, res) => {
  // res.status(200).json('Welcome, your app is working well at: '+ port + ', Developed by: '+ developer + ' and other User is: '+  process.env.USERNAME_DB + '  '+  process.env.PASSWORD_DB );

  res.render("home.hbs", {
    userDetail:'userDetail',
    userName:'userDetail.displayName',
    userEmail:'userDetail.email',
    userPic:'userDetail.PhotoURL'

    // sub: '101299453244032604290',
    // id: '101299453244032604290',
    // displayName: 'Mufakhar',
    // given_name: 'Mufakhar',
    // email: 'bizappsintl@gmail.com',
    // picture: 'https://lh3.googleusercontent.com/a/ACg8ocIr2e3EylbP1vgmvNzOg6Bihe-QOJleTDyBeQOidOZk=s96-c',
  
})




})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Export the Express API
// module.exports = app