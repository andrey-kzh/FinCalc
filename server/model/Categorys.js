const mongoose = require('mongoose');
const connection = require('../libs/connection');

const categorysSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    visible: {
        type: Boolean,
        required: true,
    }
}, {toJSON: {virtuals: true}});

categorysSchema.virtual('categoryList', {
    ref: 'Lists', // The model to use
    localField: '_id',
    foreignField: 'categoryId',
    justOne: false,
    //options: {sort: {date: -1}}
});

module.exports = connection.model('Categorys', categorysSchema);
