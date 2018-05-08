const mongoose = require('mongoose');

const category = new mongoose.Schema({
    title:'Groceries'
});

module.exports = mongoose.model('Category', Category);
