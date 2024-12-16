const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    idCategory: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    discount: { type: String, default:"0" },
    image: { type: String, required: true },
    sold: { type: String, default:"0" },
    quantity: { type: String, required: true },
    rate: { type: String, default:"5"},
    describe: { type: String, required: true },
    status: { type: String,default: "Còn Hàng" },
    createAt: { type: Date, default: Date.now },
})
const Product = mongoose.model('Products', ProductSchema);


module.exports = Product;