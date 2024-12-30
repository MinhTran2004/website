const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String },
    discountValue: { type: String, required: true },
    quantity: { type: String, required: true },
    condition: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    describe: { type: String, required: true },
    status: { type: String, required: true },
    createAt: { type: String, required: true },
})

const Coupon = mongoose.model('Coupons', couponSchema);


module.exports = Coupon;