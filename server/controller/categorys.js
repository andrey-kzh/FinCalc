const Categorys = require('../model/Categorys');
const mapCategory = require('../mappers/categorys');

module.exports.getCategorys = async function getCategorys(ctx, next) {

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

        ctx.body = {categories: categorys.map(mapCategory)};

    } catch (err) {
        ctx.throw(400, err.message);
    }
};

module.exports.addCategory = async function addCategory(ctx, next) {

    console.log(ctx.request.body)

    try {
        const category = await Categorys.create({
            title: ctx.request.body.title,
            userId: ctx.request.body.userId,
            type: ctx.request.body.type,
            visible: true,
        });
        ctx.body = {categoryId: category.id};
    } catch (err) {
        ctx.throw(400, err.message);
    }
};

module.exports.updCategory = async function updCategory(ctx, next) {

    try {
        const category = await Categorys.findByIdAndUpdate(
            ctx.request.body.id,
            {visible: ctx.request.body.visible}
        );
        ctx.body = {categoryId: category.id};
    } catch (err) {
        ctx.throw(400, err.message);
    }
};
