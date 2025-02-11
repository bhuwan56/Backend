require('dotenv').config(); // Load environment variables

const express = require('express');
const app = express();

let PORT = process.env.PORT || 3000;
console.log(`PORT set to: ${PORT}`);

app.get("/hello", (req, res) => {
  res.send('Hello World');
});
app.get("/run", (req, res) => {
  res.send('this is our second class of Backend.');
});

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
});
