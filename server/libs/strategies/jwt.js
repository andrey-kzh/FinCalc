const Session = require('../../model/Sessions');
const config = require('../../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.jwtSecretKey;

module.exports = new JwtStrategy(opts, async (jwtPayload, done) => {

    try {
        if (new Date(jwtPayload.expires) < new Date()) {
            return done({code: 'l03', mes: 'Access token expires'}, false);
        }

        const session = await Session.findOne({_id: jwtPayload.sessionId}).populate('user');

        if (!session) {
            return done({code: 'l04', mes: 'Wrong access token'}, false);
        }

        session.lastVisit = new Date();
        await session.save();

        return done(null, session.user);
    } catch (err) {
        return done(err);
    }

});
