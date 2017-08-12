var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var expressValidator = require('express-validator');
router.use(expressValidator());
var passport = require('passport');
var User = require('../models/user');

var csrfProtection = csrf();
router.use(csrfProtection);

// GET Sign Up Page
router.get('/signup', function (req, res, next) {
    var messages = req.flash('error');
    res.render('user/signup', {
        csrfToken: req.csrfToken(),
        messages: messages,
        hasErrors: messages.length > 0
    });
});

// GET Sign In Page
router.get('/signin', function (req, res) {
    res.render('user/signin');
});
router.get('/profile', function (req, res) {
    User.find({}, function (err, email) {
        res.render('user/profile', {
            username: req.user.firstname,
            date: req.user.createdOn
        });
    });
});
router.post('/signup', passport.authenticate('local.signup', {
    failureRedirect: 'user/signup',
    failureFlash: true
}), function (req, res, next) {
    if (req.session.oldUrl) {
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldUrl);
    } else {
        res.redirect('/user/profile');
    }
});

module.exports = router;