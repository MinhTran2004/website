import { Box, Typography } from "@mui/material";
import ItemProduct from "../../component/ItemProduct";
import React from "react";
import { Order } from "../../model/order.model";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

interface Props {
    dataDetailOrder?: Order;
    setSteps: (steps: any) => void;
}

const DetailOrderScreen: React.FC<Props> = (props) => {

    const disscountCoupon = Number(props.dataDetailOrder?.coupon.disscount) ? Number(props.dataDetailOrder?.coupon.disscount) : 0;
    const transport = Number(props.dataDetailOrder?.transport);
    const totalCost = Number(props.dataDetailOrder?.totalCost);

    const total = totalCost + disscountCoupon - transport;
    return (
        <Box sx={{
            height: '100%',
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <KeyboardBackspaceIcon sx={{ width: 30, height: 30,cursor: 'pointer' }} onClick={() => props.setSteps(0)} />
                <Typography
                    sx={{
                        fontSize: 24,
                        fontWeight: '600',
                        textAlign: 'center',
                        marginBottom: 2
                    }}
                >Chi tiết đơn hàng</Typography>
                <Box sx={{ width: 20, height: 20 }} />
            </Box>

            <Box sx={{
                height: '90%',
                display: 'flex',
                justifyContent: 'space-between',
                gap: 2
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 2, flex: 1 }}>
                    {/* banner 1 */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, backgroundColor: '#1e1e1e', p: 2 }}>
                        <Box>
                            <Typography sx={{ fontSize: 20, fontWeight: '600' }}>Thông tin đơn hàng</Typography>
                            <Typography sx={{ fontSize: 16 }}>{props.dataDetailOrder?.address.name}</Typography>
                            <Typography sx={{ fontSize: 16 }}>(+84) {props.dataDetailOrder?.address.phone}</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: 20, fontWeight: '600' }}>Địa chỉ giao hàng</Typography>
                            <Typography sx={{ fontSize: 16 }}>{props.dataDetailOrder?.address.detailAddress}</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: 20, fontWeight: '600' }}>Phương thức thanh toán</Typography>
                            <Typography sx={{ fontSize: 16 }}>{props.dataDetailOrder?.paymentMethod}</Typography>
                        </Box>
                    </Box>

                    {/* banner 2 */}
                    <Box sx={{
                        display: 'flex',
                        height: '100%',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        backgroundColor: '#1e1e1e',
                        p: 2,
                        gap: 2,
                    }}>
                        <Box>
                            <Typography sx={{ fontSize: 18, fontWeight: 600 }}>Tổng quan đơn hàng</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: 16 }}>Tạm tính</Typography>
                                <Typography sx={{ fontSize: 16 }}>{total}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: 16 }}>Vận chuyển</Typography>
                                <Typography sx={{ fontSize: 16 }}>{props.dataDetailOrder?.transport}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: 16 }}>Giảm giá</Typography>
                                <Typography sx={{ fontSize: 16 }}>{props.dataDetailOrder?.coupon.disscount ? props.dataDetailOrder.coupon.disscount : 0}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: 16 }}>Tổng</Typography>
                                <Typography sx={{ fontSize: 16 }}>{props.dataDetailOrder?.totalCost}</Typography>
                            </Box>
                        </Box>
                        <Box >
                            <Typography sx={{ fontSize: 18, fontWeight: 600 }}>Chi tiết đơn hàng</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: 16 }}>Mã đơn hàng</Typography>
                                <Typography sx={{ fontSize: 16 }}>{props.dataDetailOrder?._id}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: 16 }}>Thời gian tạo</Typography>
                                <Typography sx={{ fontSize: 16 }}>{props.dataDetailOrder?.createAt}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontSize: 16 }}>Trạng thái đơn hàng</Typography>
                                <Typography sx={{ fontSize: 16 }}>{props.dataDetailOrder?.status}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* banner product */}
                <Box sx={{
                    backgroundColor: '#1e1e1e',
                    flex: 1,
                    p: 2,
                    overflowY: 'scroll'
                }}>
                    {props.dataDetailOrder?.dataProduct.map((item, index) => (
                        <ItemProduct
                            key={index}
                            image={item.image}
                            name={item.name}
                            category={item.category}
                            price={item.price}
                            quantityCart={item.quantityCart}
                        />
                    ))}
                </Box>
            </Box>

        </Box>
    )
}

export default DetailOrderScreen;