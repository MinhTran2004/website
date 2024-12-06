const express = require('express');
const Account = require('../model/account');

const router = express.Router();

router.get('/getAllAccount', async (req, res) => {
    const reponse = await Account.find().limit(10);
    console.log('hihi');
    
    if (reponse.length != 0) {
        res.send({status: true, data:reponse})
    }else{
        res.send({status:false});
    }
})

module.exports = router;
