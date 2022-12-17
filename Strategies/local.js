const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const bcrypt = require("bcrypt")
const User = require('../users.model')

passport.use(new LocalStrategy(async function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!bcrypt.compareSync(password, user.password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));

  module.exports = passport