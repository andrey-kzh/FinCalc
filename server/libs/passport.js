const {KoaPassport} = require('koa-passport');
const passport = new KoaPassport();

const localStrategy = require('./strategies/local');
const jwtStrategy = require('./strategies/jwt');

passport.use(localStrategy);
passport.use(jwtStrategy);

module.exports = passport;
