const Lists = require('../model/Lists');

module.exports.addLists = async function addLists(ctx, next) {

    try {
        const list = await Lists.create({
            title: ctx.request.body.title,
            categoryId: ctx.request.body.categoryId,
            date: new Date(),
            sum: ctx.request.body.sum,
        });
        ctx.body = {listId: list.id};
    } catch (err) {
        ctx.throw(400, err.message);
    }
};

module.exports.delLists = async function delLists(ctx, next) {

    try {
        const list = await Lists.findByIdAndDelete(ctx.request.body.id);
        ctx.body = {listId: list.id};
    } catch (err) {
        ctx.throw(400, err.message);
    }
};
