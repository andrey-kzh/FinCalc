const Categorys = require('../model/Categorys');
const {mapCategorys} = require('../mappers/categorys');

module.exports.getCategorys = async function getCategorys(ctx, next) {

    if (!ctx.request.query.userId) {
        ctx.throw(400, 'userId parameter not found');
    }

    try {
        const categorys = await Categorys.find({userId: ctx.request.query.userId})
        ctx.body = {categories: categorys.map(mapCategorys)};

    } catch (err) {
        ctx.throw(400, err.message);
    }
};

module.exports.addCategory = async function addCategory(ctx, next) {

    try {
        const category = await Categorys.create({
            title: ctx.request.body.title,
            userId: ctx.request.body.userId,
            type: ctx.request.body.type,
            visible: true,
        });

        ctx.body = {category: [category].map(mapCategorys)};
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
