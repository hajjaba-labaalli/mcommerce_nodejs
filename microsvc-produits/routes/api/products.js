const  express = require('express');
const  router =  express.Router();

const Product = require('../../models/Product');

// @route GET api/products
// @desc  GET all products
// @access Public
router.get('/', (req, res) => {
    Product.find()
        .then( products => res.json(products))
        .catch(err => res.status(404).json({error: "Aucun produit n'est disponible à la vente"}))
});

// @route GET api/products
// @desc  GET a product
// @access Public
router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then( product => res.json(product))
        .catch( err => res.status(404).json({error: "Le produit correspondant à l'id " + req.params.id + " n'existe pas"}))

});

module.exports =  router;