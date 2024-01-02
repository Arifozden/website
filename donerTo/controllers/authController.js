const User = require('../models/User');

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