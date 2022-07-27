const Users = require('../model/Users');

// curl  -H 'Content-Type: application/json' --data '{"name":"Demo","login":"demo","password":"demo123"}' http://localhost:3000/api/registration
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

    const login = ctx.request.body.login
    const password = ctx.request.body.password
    const name = ctx.request.body.name

    try {
        const user = new Users({ name: name, login: login });
        await user.setPassword(password);
        await user.save();
        ctx.status = 200;
        ctx.body = { userId: user._id };
    } catch (err) {
        ctx.throw(400, err.message);
    }
};