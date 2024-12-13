const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    discountType: { type: String, required:true},
    discount: { type: String, required:true },
    maxDisCount: { type: String, required:true },
    quantity: { type: String, required: true },
    condition: { type: String, required: true },
    startDate: { type: String, required: true },
       startDate: { type: Date, required: true },  // Sử dụng Date để lưu trữ ngày
    endDate: { type: Date, required: true },    // Sử dụng Date để lưu trữ ngày
    status: { type: String, default:"Đang sử dụng" },
    createAt: { type: Date, default: Date.now },
})

const Coupon = mongoose.model('Coupons', couponSchema);


module.exports = Coupon;