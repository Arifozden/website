const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};


exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        // USER SESSION
        req.session.userID = user._id;
        res.status(200).redirect('/');
      } else {
        res.status(401).send('Invalid password');
      }
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'fail',
      error,
    });
  }
};

exports.logoutUser = async (req, res) => {
  try {
    await req.session.destroy(()=>
    res.status(200).redirect('/')
  ) 
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      error,
    });
  }
};