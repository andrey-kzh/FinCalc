const passport = require('../libs/passport');

module.exports.authorization = async function authorization(ctx, next) {

    await passport.authenticate('jwt', async (err, user) => {

        if (err || !user) {
            if (!err) err = {code: 'l07', mes: 'Undefined error'};
            ctx.error = err
            return next();
        }
        ctx.user = user;
        return next();

    })(ctx, next);
};
