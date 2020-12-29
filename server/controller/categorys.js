const Lists = require('../model/Lists');
const Categorys = require('../model/Categorys');
const {mapCategorys} = require('../mappers/categorys');

module.exports.getCategorys = async function getCategorys(ctx, next) {

    if (!ctx.request.query.userId) {
        ctx.throw(400, 'userId parameter not found');
    }

    try {
        const categorys = await Categorys.find({userId: ctx.request.query.userId})
        ctx.body = {categorys: categorys.map(mapCategorys)};

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

        ctx.body = {category: [category].map(mapCategorys)[0]};
    } catch (err) {
        ctx.throw(400, err.message);
    }
};

module.exports.updCategory = async function updCategory(ctx, next) {

    try {
        let updFields = {};
        if ('visible' in ctx.request.body) updFields.visible = ctx.request.body.visible;
        if ('title' in ctx.request.body) updFields.title = ctx.request.body.title;
        if ('type' in ctx.request.body) updFields.type = ctx.request.body.type;

        const category = await Categorys.findByIdAndUpdate(
            ctx.request.body.id,
            updFields,
            {new: true} //option for return new object after update
        );

        ctx.body = {category: [category].map(mapCategorys)[0]};
    } catch (err) {
        ctx.throw(400, err.message);
    }
};

module.exports.delCategory = async function delCategory(ctx, next) {

    try {
        const category = await Categorys.findByIdAndDelete(ctx.request.body.id);
        await Lists.deleteMany({categoryId: category.id});
        ctx.body = {categoryId: category.id}
    } catch (err) {
        ctx.throw(400, err.message);
    }
};
