const Lists = require('../model/Lists');
const Categorys = require('../model/Categorys');
const {mapCategorysWithLists} = require('../mappers/categorys');


module.exports.getLists = async function getLists(ctx, next) {

    if (!ctx.request.query.userId) {
        ctx.throw(400, 'userId parameter not found');
    }
    if (!ctx.request.query.dateMin) {
        ctx.throw(400, 'dateMin parameter not found');
    }
    if (!ctx.request.query.dateMax) {
        ctx.throw(400, 'dateMax parameter not found');
    }

    try {
        const categorys = await Categorys.find({userId: ctx.request.query.userId})
            .populate({
                path: 'categoryList', //виртуал в моделе
                match: {
                    date: {
                        $gte: ctx.request.query.dateMin,
                        $lte: ctx.request.query.dateMax,
                    },
                },
                select: 'title sum date'
            });

        ctx.body = {categories: categorys.map(mapCategorysWithLists)};

    } catch (err) {
        ctx.throw(400, err.message);
    }
};

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
