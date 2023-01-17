const Product = require('../models/product.model.js');

module.exports.createProduct = (req, res) => {
        Product.create(req.body)
            .then((product) => res.json(product))
            .catch((err) => console.log(err));
}