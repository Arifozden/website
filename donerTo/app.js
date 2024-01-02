const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const pageRoute = require('./routes/pageRoute');
const categoryRoute = require('./routes/categoryRoute');


const app = express();

//Connect DB
mongoose
  .connect('mongodb://localhost/donerto-db', {
  })
  .then(() => {
    console.log('DB CONNECTED!');
  })
  .catch((err) => {
    console.log(err);
  });

//Template engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Routes
app.use('/', pageRoute);
app.use('/categories', categoryRoute);


const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
