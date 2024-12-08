const express = require('express');
const Product = require('../model/product');

const router = express.Router();

router.post('/createProduct', async (req, res) => {
    try{
        const data = req.body;
        const product = new Product(data);
        const reponse = await product.save();

        if(reponse.lenght != 0){
            res.send({status: true})
        }else{
            res.send({status:false})
        }
    }catch(err){
        console.log(err);
    }
})

router.get('/getAllProduct', async (req, res) => {
    try{
        const product = await Product.find().limit(10); 

        if(product.lenght != 0){
            res.send({status: true, data:product})
        }else{
            res.send({status:false})
        }
    }catch(err){
        console.log(err);
    }
})
router.get('/getProductByName', async (req, res) => {
    const { name } = req.query; 

    try {
        if (!name) {
            return res.status(400).send({
                message: 'Please provide a product name to search',
            });
        }
      
        const products = await Product.find({
            name: { $regex: name, $options: 'i' }  
        });

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

module.exports = router;