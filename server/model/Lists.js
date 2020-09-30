const mongoose = require('mongoose');
const connection = require('../libs/connection');

const listsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    sum: {
        type: Number,
        required: true,
    }

});

module.exports = connection.model('Lists', listsSchema);
