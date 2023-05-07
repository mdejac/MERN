const Product = require('../models/product.model');

module.exports= {
    
    createProduct: (req, res) => {
        Product.create(req.body)
            .then(product => res.json(product))
            .catch(err => res.status(400).json(err));
    },

    getAllProducts: (req, res) => {
        Product.find()
            .then(products => res.json(products))
            .catch(err => res.json(err));
    },

    getProduct: (req, res) => {
        Product.findById({_id: req.params.id})
            .then(product => res.json(product))
            .catch(err => res.json(err));
    },

    updateProduct: (req, res) => {
        Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
            .then(product => res.json(product))
            .catch(err => res.status(400).json(err));
    },

    deleteProduct: (req, res) => {
        Product.findByIdAndDelete({_id:req.params.id})
            .then(product => res.json(product))
            .catch(err => res.json(err));
    }
}
