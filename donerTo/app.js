const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser');
const pageRoute = require('./routes/pageRoute');
const categoryRoute = require('./routes/categoryRoute');
const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');


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

//Global variables
global.userIN = null;

//Middlewares
app.use(express.static('public'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(session({
  secret: 'my_keyboard_cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost/donerto-db' }),
}))

//Routes
app.use('*', (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use('/', pageRoute);
app.use('/categories', categoryRoute);
app.use('/products', productRoute);
app.use('/users', userRoute);


const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
