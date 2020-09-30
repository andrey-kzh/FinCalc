const Users = require('../model/Users');

module.exports.registration = async function registration(ctx, next) {

    if (!ctx.request.body.login) {
        ctx.throw(400, 'Login not found');
    }
    if (!ctx.request.body.password) {
        ctx.throw(400, 'Password not found');
    }
    if (!ctx.request.body.name) {
        ctx.throw(400, 'Name not found');
    }

    try {
        const user = await Users.create({
            login: ctx.request.body.login,
            password: ctx.request.body.password,
            name: ctx.request.body.name,
        });
        ctx.body = {user: user.id};
    } catch (err) {
        ctx.throw(400, err.message);
    }
};
