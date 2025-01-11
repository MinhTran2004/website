const express = require('express');
const Account = require('../model/account');
const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert(require('../firebase.json'))
});
const router = express.Router();

router.get('/getAllAccount', async (req, res) => {
    try {
        const data = [];
        const reponse = await admin.auth().listUsers(1000)
        if (reponse.length != 0) {
            reponse.users.map((user) => {
                data.push({
                    id: user.uid,
                    email: user.email,
                    disabled: user.disabled,
                })
            });
            res.send({ status: true, data: data })
        } else {
            res.send({ status: false, data: [] })
        }
    } catch (e) {
        console.log(e);
    }
})

router.get('/getAccountByEmail', async (req, res) => {
    const { filter, account } = req.query;
    const listUsersResult = await admin.auth().listUsers();

    try {
        let data = [];
        if (filter.toLocaleLowerCase() === 'id') {
            data = listUsersResult.users.find(user => user.uid === account);
        } else if (filter.toLocaleLowerCase() === 'email') {
            data = listUsersResult.users.find(user => user.email === account);
        }
        res.status(200).send({
            message: 'success',
            data: [{ id: data.uid, email: data.email, disabled: data.disabled }],
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
    const uid = id;
    const reponse = await admin.auth().updateUser(uid, {
        disabled: status,
    });

    console.log(id, status);
    
    if (reponse.length != 0) {
        res.send({ status: true })
    } else {
        res.send({ status: false });
    }
})

module.exports = router;
