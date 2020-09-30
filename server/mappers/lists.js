module.exports = function mapList(list) {
    return {
        id: list.id,
        title: list.title,
        categoryId: list.categoryId,
        date: list.date,
        sum: list.sum,
    };
};
