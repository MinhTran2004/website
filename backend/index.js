const express = require('express');
const cors = require('cors');

const connectDB = require('./config');
const accountRoute = require('./routers/account.router');
const addressRoute = require('./routers/address.router');
const productRoute = require('./routers/product.router');
const couponRoute = require('./routers/coupon.router');

const app = express();
const port = 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/account', accountRoute);
app.use('/address', addressRoute);
app.use('/product', productRoute);
app.use('/coupon', couponRoute);

app.listen(port, () => {
  console.log(`Ứng dụng đang lắng nghe trên cổng ${port}`);
});