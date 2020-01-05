const User = require('../models/userModel');

const userController = {};


userController.createUser = async (req, res, next) => {
    let createdUser = false;
    await User.find({ username: req.body.username}, (err,users) => {
        if (users.length === 0) {
            User.create({ username: req.body.username, password: req.body.password}, (error, newUser) => {
                if (newUser) {
                    createdUser = true;
                    res.locals.createdUser = createdUser;
                    return next();
                }
            });
        } else if (users.length > 0) {
            //need an error message to display onto the board
            console.log('User is already created');
            res.locals.createdUser = createdUser;
            return next(error);
        }
    });
}



module.exports = userController;