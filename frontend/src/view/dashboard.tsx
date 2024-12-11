// import { Table } from 'react-bootstrap';
import styles from '../css/dashboard.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function DashboardScreen() {
    const data = [
        {
            name: 'Page A',
            DoanhThu: 0,
            ĐonHang: 240,
            NguoiDung: 240,
        },
        {
            name: 'Page B',
            DoanhThu: 50,
            ĐonHang: 130,
            NguoiDung: 220,
        },
        {
            name: 'Page C',
            DoanhThu: 100,
            ĐonHang: 150,
            NguoiDung: 220,
        },
        {
            name: 'Page D',
            DoanhThu: 150,
            ĐonHang: 390,
            NguoiDung: 200,
        },
        {
            name: 'Page E',
            DoanhThu: 180,
            ĐonHang: 480,
            NguoiDung: 210,
        },
        {
            name: 'Page F',
            DoanhThu: 230,
            ĐonHang: 380,
            NguoiDung: 250,
        },
        {
            name: 'Page G',
            DoanhThu: 340,
            ĐonHang: 430,
            NguoiDung: 210,
        },
    ];

    const RenderLineChart = () => (
        <div className={styles.banner1}>
            <ResponsiveContainer width={"100%"} height={'100%'}>
                <LineChart data={data}
                    margin={{ top: 30, right: 50, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis
                        domain={[0, 1000]}
                        ticks={[10, 50, 100, 300, 500, 800, 1000]} />
                    <Tooltip />
                    <Legend formatter={(value) => {
                        if (value === "DoanhThu") return "Doanh Thu";
                        else if (value === "ĐonHang") return "Đơn hàng";
                        else if (value === "NguoiDung") return "Người dùng";
                    }} />
                    <Line type="monotone" dataKey="DoanhThu" stroke="#8884d8" />
                    <Line type="monotone" dataKey="ĐonHang" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="NguoiDung" stroke="#ffab40" />
                </LineChart>
            </ResponsiveContainer >
        </div>
    )

    return (
        <div className={styles.main}>
            <div className={styles.container_link}>
                <p className={styles.text_link}>Trang chủ <span style={{ color: 'black' }}>/ Trang chủ </span></p>
            </div>

            <div className={styles.container_body}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* banner1 */}
                    <RenderLineChart />

                    <div className={styles.banner2}>
                        <div className={styles.item_banner2}>
                            <div>
                                <p className={styles.title_banner2}>Doanh thu</p>
                                <p className={styles.number_banner2} style={{ color: '#4098fe' }}>12.000.000</p>
                            </div>
                            <img src={require('../assets/images/icon_revenue.png')} alt="" className={styles.image_banner2} style={{ backgroundColor: '#4098fe' }} />
                        </div>
                        <div className={styles.item_banner2} style={{ margin: '15px 0' }}>
                            <div>
                                <p className={styles.title_banner2}>Đơn hàng</p>
                                <p className={styles.number_banner2} style={{ color: '#2fd4b5' }}>232</p>
                            </div>
                            <img src={require('../assets/images/icon_product.png')} alt="" className={styles.image_banner2} style={{ backgroundColor: '#2fd4b5' }} />
                        </div>
                        <div className={styles.item_banner2}>
                            <div>
                                <p className={styles.title_banner2}>Ngưòi dùng</p>
                                <p className={styles.number_banner2} style={{ color: '#fdb54d' }}>120</p>
                            </div>
                            <img src={require('../assets/images/icon_user.png')} alt="" className={styles.image_banner2} style={{ backgroundColor: '#fdb54d' }} />
                        </div>
                    </div>
                </div>

                {/* <div className={styles.banner3}>
                    <h4>Sản phẩm bán chạy</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá sản phẩm</th>
                                <th>Lượt mua</th>
                                <th>Đánh giá</th>
                                <th>Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Bánh mì</td>
                                <td>20.000</td>
                                <td>240</td>
                                <td>4.9</td>
                                <td>Còn hàng</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Bánh mì</td>
                                <td>20.000</td>
                                <td>240</td>
                                <td>4.9</td>
                                <td>Còn hàng</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Bánh mì</td>
                                <td>20.000</td>
                                <td>240</td>
                                <td>4.9</td>
                                <td>Còn hàng</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Bánh mì</td>
                                <td>20.000</td>
                                <td>240</td>
                                <td>4.9</td>
                                <td>Còn hàng</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Bánh mì</td>
                                <td>20.000</td>
                                <td>240</td>
                                <td>4.9</td>
                                <td>Còn hàng</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Bánh mì</td>
                                <td>20.000</td>
                                <td>240</td>
                                <td>4.9</td>
                                <td>Còn hàng</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Bánh mì</td>
                                <td>20.000</td>
                                <td>240</td>
                                <td>4.9</td>
                                <td>Còn hàng</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Bánh mì</td>
                                <td>20.000</td>
                                <td>240</td>
                                <td>4.9</td>
                                <td>Còn hàng</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Bánh mì</td>
                                <td>20.000</td>
                                <td>240</td>
                                <td>4.9</td>
                                <td>Còn hàng</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Bánh mì</td>
                                <td>20.000</td>
                                <td>240</td>
                                <td>4.9</td>
                                <td>Còn hàng</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Bánh mì</td>
                                <td>20.000</td>
                                <td>240</td>
                                <td>4.9</td>
                                <td>Còn hàng</td>
                            </tr>
                        </tbody>
                    </Table>
                </div> */}

            </div>

        </div>
    )
}