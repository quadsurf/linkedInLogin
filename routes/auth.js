var express = require('express');
var router = express.Router();
var passport = require("passport");

router.get('/linkedin',
  passport.authenticate('linkedin'),
  function(req, res){
    // removed 2nd authenticate argument, as per docs: , { state: 'SOME STATE'  }
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
});

router.get('/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
