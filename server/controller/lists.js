const Lists = require('../model/Lists');
const Categorys = require('../model/Categorys');
const {mapCategorysWithLists} = require('../mappers/categorys');
const mapList = require('../mappers/lists');


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
        const categorys = await Categorys.find({userId: ctx.request.query.userId, visible: true})
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

        ctx.body = {categorys: categorys.map(mapCategorysWithLists)};

    } catch (err) {
        ctx.throw(400, err.message);
    }
};

module.exports.addLists = async function addLists(ctx, next) {

    try {
        const listItem = await Lists.create({
            title: ctx.request.body.title,
            categoryId: ctx.request.body.categoryId,
            date: new Date(),
            sum: ctx.request.body.sum,
        });
        ctx.body = {listItem: [listItem].map(mapList)[0]};
    } catch (err) {
        ctx.throw(400, err.message);
    }
};

module.exports.updLists = async function updLists(ctx, next) {

    try {
        let updFields = {};
        if ('title' in ctx.request.body) updFields.title = ctx.request.body.title;
        if ('sum' in ctx.request.body) updFields.sum = ctx.request.body.sum;

        const list = await Lists.findByIdAndUpdate(
            ctx.request.body.id,
            updFields,
            {new: true} //option for return new object after update
        );

        ctx.body = {listItem: [list].map(mapList)[0]};
    } catch (err) {
        ctx.throw(400, err.message);
    }
};

module.exports.delLists = async function delLists(ctx, next) {

    try {
        const list = await Lists.findByIdAndDelete(ctx.request.body.id);
        ctx.body = {listItem: [list].map(mapList)[0]};
    } catch (err) {
        ctx.throw(400, err.message);
    }
};
