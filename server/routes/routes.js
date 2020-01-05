const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');


router.post('/', userController.createUser, (req, res, next) => {
    console.log('this is createdUser in router', res.locals.createdUser);
    if (res.locals.createdUser === true) {
        res.status(200).json({ signedUp: true });
    }
})



module.exports = router;
