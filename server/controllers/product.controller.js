const Product = require("../models/product.model");

const createNewProduct = (req, res) => {
    Product.create(req.body)
    .then((newProduct) => {
        res.json(newProduct);
    })
    .catch((err) => res.status(400).json(err));
};

const getAllProducts = (req, res) => {
    Product.find()
    .then((allProducts) => res.json(allProducts))
    .catch((err) => res.status(400).json(err));
};

const getOneProductById = (req, res) => {
    Product.findOne({_id: req.params.id })
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(err));
};

const deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(err));
};

const findOneAndUpdate = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
    })
    .then((updatedProduct) => res.json(updatedProduct))
    .catch((err) => res.status(400).json(err));
};


module.exports = {
    createNewProduct,
    getAllProducts,
    getOneProductById,
    deleteProduct,
    findOneAndUpdate,
};