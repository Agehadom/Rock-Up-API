// require authentication related packages
const passport = require('passport')
const bearer = require('passport-http-bearer')
// user model will be used to set `req.user` in authenticated routes
const User = require('./../models/users')

// http://www.passportjs.org/packages/passport-http-bearer/
passport.use(new bearer.Strategy(function(token, done) {
  User.findOne({ token: token }, function (err, user) {
   if (err) { return done(err) }
   if (!user) { return done(null, false) }
   return done(null, user, { scope: 'all' })
 })
}))

// http://www.passportjs.org/docs/configure/
module.exports = passport.initialize()
