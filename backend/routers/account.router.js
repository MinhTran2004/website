const express = require('express');
const Account = require('../model/account');

const router = express.Router();

router.get('/getAllAccount', async (req, res) => {
    const reponse = await Account.find().limit(10);
    console.log(reponse);
    
    if (reponse.length != 0) {
        res.send({status: true, data:reponse})
    }else{
        res.send({status:false});
    }
})
router.get('/getAccountByEmail', async (req, res) => {
    const { account } = req.query;

    try {
        if (!account) {
            return res.status(400).send({
                message: 'Please provide an account (email) to search',
            });
        }

        const accounts = await Account.find({
            account: { $regex: account, $options: 'i' } // Tìm kiếm gần đúng, không phân biệt hoa thường
        });

        res.status(200).send({
            message: 'success',
            accounts: accounts,
        });
    } catch (error) {
        console.error("Error searching accounts:", error);
        res.status(500).send({
            message: 'Error searching accounts',
            error: error.message
        });
    }
});
router.delete('/deleteAccountById/:id', async (req, res) => {
    const { id } = req.params;
    const reponse = await Account.findByIdAndDelete(id);

    if (reponse != null) {
        res.send({ status: true })
    } else {
        res.send({ status: false });
    }
});

module.exports = router;
