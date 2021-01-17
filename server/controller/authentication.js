const passport = require('../libs/passport');
const Session = require('../model/Sessions');


module.exports.login = async function login(ctx, next) {

    if (!ctx.request.body.login || !ctx.request.body.password) {
        ctx.status = 400;
        ctx.body = {error: {code: 'l01', mes: 'Empty login/password'}};
        return;
    }

    await passport.authenticate('local', async (err, user, info) => {
        if (err) throw err;

        if (!user) {
            ctx.status = 400;
            ctx.body = {error: {code: 'l02', mes: info}};
            return;
        }

        try {
            //одна сессия на пользователя независмо от устройства. Потом добавить fingerprint
            let session = await Session.findOne({user: user.id});
            if (!session) {
                session = new Session({user: user.id, lastVisit: new Date()});
            }
            session.lastVisit = new Date();
            const tokens = await session.generateAndSetTokens();
            await session.save();

            ctx.body = {id: user.id, userName: user.name, isLogin: true, tokens: tokens};

        } catch (e) {
            console.log(e.message);
        }
    })(ctx, next);
};


module.exports.logout = async function logout(ctx, next) {

    try {
        if (!ctx.request.body.refreshToken) {
            ctx.status = 400;
            ctx.body = {error: {code: 'l05', mes: 'Refresh token not found'}};
            return;
        }

        const result = await Session.deleteOne({refreshToken: ctx.request.body.refreshToken})
        if (result.deletedCount === 0) {
            ctx.status = 400;
            ctx.body = {error: {code: 'l06', mes: 'Session not found'}};
            return;
        }

        ctx.status = 200;
        ctx.body = {result: 'ok'};

    } catch (e) {
        console.log(e.message)
    }

}


module.exports.getUserDataBySession = async function getUserDataBySession(ctx, next) {

    try {
        if (!ctx.user) { //Данные из authorization.js
            ctx.status = 401;
            ctx.body = {error: ctx.error};
            return
        }
        ctx.status = 200;
        ctx.body = {id: ctx.user.id, userName: ctx.user.name, isLogin: true};

    } catch (e) {
        console.log(e.message)
    }

}


module.exports.refreshTokens = async function refreshTokens(ctx, next) {

    try {

        if (!ctx.request.body.refreshToken) {
            ctx.status = 400;
            ctx.body = {error: {code: 'l05', mes: 'Refresh token not found'}};
            return;
        }

        let session = await Session.findOne({refreshToken: ctx.request.body.refreshToken});
        if (!session) {
            ctx.status = 400;
            ctx.body = {error: {code: 'l06', mes: 'Session not found'}};
            return;
        }
        const tokens = await session.generateAndSetTokens();
        await session.save();

        ctx.body = {tokens: tokens};

    } catch (e) {
        console.log(e.message);
    }

}
