// index.js
// const express = require('express')
// const dotenv  = require("dotenv")
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express()




const port = process.env.PORT || 4000;



// app.get('/home', (req, res) => {
app.get('/', (req, res) => {
  res.status(200).json('Welcome, your app is working well, Developed by: '+ process.env.USERNAME_DEVELOPER);
})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Export the Express API
// module.exports = app