const LocalStrategy = require('passport-local').Strategy;
const Users = require('../../model/Users');

module.exports = new LocalStrategy(
    {usernameField: 'login', session: false},
    async function(login, password, done) {
        try {
            const user = await Users.findOne({login: login});
            if (!user) {
                return done(null, false, 'User not found');
            }

            const isValidPassword = await user.checkPassword(password);

            if (!isValidPassword) {
                return done(null, false, 'User not found');
            }

            return done(null, user);
        } catch (err) {
            done(err);
        }
    }
);
