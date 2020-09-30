const mapList = require('./lists');
const calcTotalSum = require('../libs/calcTotalSum');

module.exports = function mapCategory(category) {
    return {
        id: category.id,
        title: category.title,
        userId: category.userId,
        type: category.type,
        visible: category.visible,
        totalSum: calcTotalSum(category.categoryList),
        list: category.categoryList.map(mapList),
    };
};
