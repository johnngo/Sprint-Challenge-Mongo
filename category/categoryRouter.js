const router = require('express').Router();

router.route('/').get((req,res) => {
    let query = Category.find({}).select({title:1, _id:0}).then(category => {
        res.status(200).json(category);
    }).catch(error => {
        res.status(500).json(error);
    });
}).post((req,res) => {
    const category = new Category(req.body);
    category.save().then(savedCategory => {
        res.status(201).json(savedCategory);
    }).catch(error =>{
        res.status(500).json(error);
    });
});

module.exports = router;