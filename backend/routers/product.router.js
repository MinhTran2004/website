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
        const product = await Product.find(); 

        res.send(product);
    }catch(err){
        console.log(err);
    }
})

module.exports = router;