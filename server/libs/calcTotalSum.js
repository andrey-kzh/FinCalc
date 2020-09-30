module.exports = function calcTotalSum(lists) {

    let sum = null;
    lists.forEach(list => sum += list.sum);
    return sum;
};
