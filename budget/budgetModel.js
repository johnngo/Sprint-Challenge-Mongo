const mongoose = require('mongoose');

const budget = new mongoose.Schema({
    title: 'Budget',
    budgetAmount: 3000
});

module.exports = mongoose.model('Budget', Budget);
