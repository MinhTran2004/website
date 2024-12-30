const express = require('express');
const Product = require('../model/product');

const router = express.Router();

router.post('/createProduct', async (req, res) => {
    try {
        const data = req.body;
        const product = new Product(data);
        const reponse = await product.save();

        if (reponse.lenght != 0) {
            res.send({ status: true })
        } else {
            res.send({ status: false })
        }
    } catch (err) {
        console.log(err);
    }
})

router.get('/getAllProduct', async (req, res) => {
    try {
        const product = await Product.find();

        if (product.lenght != 0) {
            res.send({ status: true, data: product })
        } else {
            res.send({ status: false })
        }
    } catch (err) {
        console.log(err);
    }
})

router.get('/getProductByName', async (req, res) => {
    const { filter, name } = req.query;
    console.log(filter, name);
    
    try {
        if (!name) {
            return res.status(400).send({
                message: 'Please provide a product name to search',
            });
        }
        const query = {};

        if (filter === '_id') {
            query._id = name
        } else {
            query[filter] = { $regex: name, $options: 'i' };
        }
        const products = await Product.find(query);

        res.status(200).send({
            message: 'success',
            products: products,
        });
    } catch (error) {
        console.error("Error searching products:", error);
        res.status(500).send({
            message: 'Error searching products',
            error: error.message
        });
    }
});
router.delete('/deleteProductById/:id', async (req, res) => {
    const { id } = req.params;
    const reponse = await Product.findByIdAndDelete(id);

    if (reponse != null) {
        res.send({ status: true })
    } else {
        res.send({ status: false });
    }
});

router.put('/updateProduct', async (req, res) => {
    const { id, data } = req.body;
    const reponse = await Product.findByIdAndUpdate(id, data);

    if (reponse != null) {
        res.send({ status: true });
    } else {
        res.send({ status: false });
    }
})

module.exports = router;