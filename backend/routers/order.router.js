const express = require('express');
const Product = require('../model/product');
const Bill = require('../model/order');

const router = express.Router();

router.get('/getAllBillByStatus', async (req, res) => {
    const { status } = req.query;
    const reponse = await Bill.find({ status: status }).sort({ createAt: -1 });

    if (reponse) {
        res.send({ status: true, data: reponse });
    } else {
        res.send({ status: false });
    }
})

router.get('/getAllOrderByFilter', async (req, res) => {
    const { filter, name, status } = req.query;
    console.log(filter, name, status);

    try {
        // Tạo đối tượng query động
        const query = {};
        query.status = status;
        if (filter === '_id') {
            query._id = name
        } else {
            query['address.' + filter] = { $regex: name, $options: 'i' };
        }
        // Tìm kiếm tài khoản trong database với query đã tạo
        const reponse = await Bill.find(query);
        console.log(query);

        if (reponse.length != 0) {
            res.send({ status: true, data: reponse })
        } else {
            res.send({ status: false })
        }

    } catch (error) {
        console.error("Error searching accounts:", error);
        res.status(500).send({
            message: 'Error searching accounts',
            error: error.message
        });
    }
});

router.delete('/deleteBillById/:id', async (req, res) => {
    const { id } = req.params;

    const reponse = await Bill.findByIdAndDelete(id);
    if (reponse) {
        res.send({ status: true });
    } else {
        res.send({ status: false })
    }
})

router.patch('/updateStatusOrder', async (req, res) => {
    const { id, status } = req.body;

    const reponse = await Bill.findByIdAndUpdate(id, { status: status });
    if (reponse != null) {
        res.send({ status: true });
    } else {
        res.send({ status: false });
    }
})

// dashboard
const getYearAndMonthPart = (year, month) => {
    let pastMonth = Number(month) - 11;
    let pastYear = Number(year);
    if (pastMonth < 1) {
        pastMonth = 12 + pastMonth;
        pastYear = pastYear - 1;
    }
    return { pastYear, pastMonth };
}

router.get('/getOrderDataForDashboard', async (req, res) => {
    try {
        const dataOrder = await Bill.find({ status: 'Hoàn thành' });
        const monthlyRevenue = {};
        const orderCountByMonth = {};

        const dateTime = [];

        // Tính doanh thu theo tháng
        dataOrder.forEach(order => {
            const time = order.createAt.split(" "); // [ '14/12/2024', '13:22:12' ]
            const dateParts = time[0].split('/');
            const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
            dateTime.push({ year: `${dateParts[2]}`, month: `${dateParts[1]}` })
            const date = new Date(formattedDate);
            const year = date.getFullYear();
            const month = date.getMonth() + 1; // Tháng bắt đầu từ 1

            const revenue = parseFloat(order.totalCost) || 0;

            const key = `${year}-${month}`;

            if (!monthlyRevenue[key]) {
                monthlyRevenue[key] = 0;
            }
            monthlyRevenue[key] += revenue;

            if (!orderCountByMonth[key]) {
                orderCountByMonth[key] = 0; // Khởi tạo nếu chưa có
            }
            orderCountByMonth[key] += 1;
        });

        const fullTime = new Date();

        const yearNow = Number(fullTime.getFullYear()); //2025
        const monthNow = Number(fullTime.getMonth() + 1); //2

        const fullTimePast = getYearAndMonthPart(yearNow, monthNow)

        // Tạo mảng chứa 12 tháng từ tháng 3 năm 2024 đến tháng 3 năm 2025
        const last12Months = [];
        for (let i = 0; i < 12; i++) {
            const month = (fullTimePast.pastMonth + i - 1) % 12 + 1; // Tính tháng
            const year = fullTimePast.pastYear + Math.floor((fullTimePast.pastMonth + i - 1) / 12); // Tính năm
            last12Months.push({ year, month, revenue: 0, order: 0 });
        }

        // // Kết hợp doanh thu với 12 tháng gần nhất
        last12Months.forEach(monthObj => {
            const key = `${monthObj.year}-${monthObj.month}`;
            if (monthlyRevenue[key]) {
                monthObj.revenue = monthlyRevenue[key]; // Gán doanh thu nếu có
            }
            if (orderCountByMonth[key]) {
                monthObj.order = orderCountByMonth[key]; // Gán doanh thu nếu có
            }
        });

        // // Sắp xếp theo năm và tháng
        const sortedData = last12Months.sort((a, b) => {
            if (a.year === b.year) {
                return a.month - b.month; // Sắp xếp theo tháng nếu năm bằng nhau
            }
            return a.year - b.year; // Sắp xếp theo năm
        });

        // Trả về kết quả
        res.send({ status: true, data: sortedData });
    } catch (error) {
        console.error('Error fetching order data:', error);
        res.send({ status: false, message: 'Server Error' });
    }
});





module.exports = router;