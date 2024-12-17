const express = require('express');
const Coupon = require('../model/coupon');

const router = express.Router();

router.post('/createCoupon', async (req, res) => {
    const data = req.body;
    const coupon = new Coupon(data);
    const reponse = await coupon.save();

    if (reponse.lenght != 0) {
        res.send({ status: true })
    } else {
        res.send({ status: false })
    }
})

router.get('/getAllCoupon', async (req, res) => {
    const reponse = await Coupon.find().limit(10);
    if (reponse.length != 0) {
        res.send({ status: true, data: reponse })
    } else {
        res.send({ status: false });
    }
})
router.delete('/deleteCouponById/:id', async (req, res) => {
    const { id } = req.params;
    const reponse = await Coupon.findByIdAndDelete(id);

    if (reponse != null) {
        res.send({ status: true })
    } else {
        res.send({ status: false });
    }
});


router.get('/searchCouponByName', async (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res.status(400).send({ status: false, message: 'Name parameter is required' });
    }

    try {
        console.log('Received name:', name);

        // Tạo regex từ chuỗi nhận được
        const regex = new RegExp(name, 'i'); // Không phân biệt hoa/thường
        console.log('Regex:', regex);

        const response = await Coupon.find({ name: regex });

        if (response.length !== 0) {
            res.send({ status: true, data: response });
        } else {
            res.send({ status: false, message: 'No coupons found' });
        }
    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
});

router.put('/updateFullOrder', async (req, res) => {
    const {id, data} = req.body;

    const reponse = await Coupon.findByIdAndUpdate(id, data);

    if (reponse != null) {
        res.send({status: true});
    }else{
        res.send({status: false});
    }
})

module.exports = router;