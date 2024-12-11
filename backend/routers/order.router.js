const express = require('express');
const Address = require('../model/address');

const router = express.Router();

router.get('/getAllBillByStatus', async (req, res) => {
    const { status } = req.query;

    const reponse = await Bill.find({ status: status }).limit(10);
    if (reponse) {
        res.send({ status: true, data: reponse });
    } else {
        res.send({ status: false });
    }

})

router.delete('/deleteBillById/:id', async (req, res) => {
    const { id } = req.params;

    const reponse = await Bill.findByIdAndDelete(id);
    if (reponse) {
        res.send({ status: true });
    } else {
        res.send({ status: false })
    }
})

module.exports = router;