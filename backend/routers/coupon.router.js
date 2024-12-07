const express = require('express');
const Coupon = require('../model/coupon');

const router = express.Router();

router.get('/getAllCoupon', async (req, res) => {
    const reponse = await Coupon.find().limit(10);
    
    if (reponse.length != 0) {
        res.send({status: true, data:reponse})
    }else{
        res.send({status:false});
    }
})

module.exports = router;