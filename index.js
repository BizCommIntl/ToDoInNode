// index.js
const express = require('express')
const dotenv  = require("dotenv")
const app = express()




const port = process.env.PORT || 4000;



// app.get('/home', (req, res) => {
app.get('/', (req, res) => {
  res.status(200).json('Welcome, your app is working well'+ process.env.USERNAME);
})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Export the Express API
module.exports = app