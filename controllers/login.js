const loginModel = require('../models/login.js')

function login(req, res) {
    // const loginAttempts = parseInt(req.cookies.loginAttempts) || 0;
  
    // if (loginAttempts >= 3) {
    //   res.end('Too many failed login attempts. Please try again later.');
    //   return;
    // }
    const result = loginModel.checkUsernameAndPassword(req.body.username, req.body.password);
    if (result) {
        //res.cookie('loginAttempts', 0);
        req.session.username = req.body.username
        res.end('Welcome');
    }
    else {
        //res.cookie('loginAttempts', loginAttempts + 1);
        res.end('Bad username and/or password');
    }
}

function isLoggedIn(req, res, next) {
    if (req.session.username != null)
        return next()
    else
        res.redirect('/')
}

module.exports = { login, isLoggedIn }