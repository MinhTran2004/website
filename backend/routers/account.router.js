const express = require('express');
const Account = require('../model/account');

const router = express.Router();

router.get('/getAllAccount', async (req, res) => {
    const reponse = await Account.find().limit(10);

    if (reponse.length != 0) {
        res.send({ status: true, data: reponse })
    } else {
        res.send({ status: false });
    }
})

router.get('/getAccountByEmail', async (req, res) => {
    const { filter, account } = req.query;

    try {
        if (!account) {
            return res.status(400).send({
                message: 'Please provide an account (email) to search',
            });
        }

        // Tạo đối tượng query động
        const query = {};

        if (filter === '_id') {
            query._id = account
        } else {
            query[filter] = { $regex: account, $options: 'i' };
        }
        // Tìm kiếm tài khoản trong database với query đã tạo
        const accounts = await Account.find(query);

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

router.patch('/updateStatusAccountById', async (req, res) => {
    const { id, status } = req.body;

    const reponse = await Account.findOneAndUpdate({ _id: id }, { status: status });
    if (reponse.length != 0) {
        res.send({ status: true })
    } else {
        res.send({ status: false });
    }
})

module.exports = router;
