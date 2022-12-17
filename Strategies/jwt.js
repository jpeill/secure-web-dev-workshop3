const passport = require('passport');
const User = require('../users/users.model');
const { Strategy, ExtractJwt } = require('passport-jwt');


passport.use(new Strategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET_KEY
        },
        function(payload_jwt, res) {
            User.findOne({_id: payload_jwt.sub}, function(error, user) {
                if (error)  {return done(error, false);}
                if (user)   {return done(null, user)};
                return done(null, false);
            });
        }
    )
);
module.exports = passport;