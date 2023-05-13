const  express = require('express');
const  router =  express.Router();

const Product = require('../../models/Product');

// @route GET api/products
// @desc  GET all products
// @access Public
router.get('/', (req, res) => {
    Product.find()
        .then( products => res.json(products))
});


// @route POST api/products
// @desc Create a Post
// @access Public
router.post('/', (req, res) => {
    const newProduct = new Product({
        titre: req.body.titre,
        description: req.body.description,
        image: req.body.image,
        price: req.body.price
    })
    newProduct.save()
           .then( product = res.json(newProduct))
});

module.exports =  router;