import { useEffect, useState } from "react"
import { Coupon } from "../model/coupon.model"
import CouponService from "../service/coupon.service";

const ViewModelManageCoupon = () =>{
    const [dataCoupon, setDataCoupon] = useState<Coupon[]>([]);

    const getAllCoupon = async () =>{
        const reponse = await CouponService.getAllCoupon();
        console.log(reponse);
        setDataCoupon(reponse);
    }
    const deleteCouponById = async (id: string) => {
        try {
            const success = await CouponService.deleteCouponById(id);
            if (success) {
                setDataCoupon((prev) => prev.filter((coupon) => coupon._id !== id)); // Xóa khỏi danh sách hiện tại
            } else {
                alert("Không thể xóa mã giảm giá, thử lại sau!");
            }
        } catch (err) {
            console.error("Có lỗi khi xóa mã giảm giá:", err);
            alert("Có lỗi khi xóa mã giảm giá");
        }
    };
    useEffect(() =>{
        getAllCoupon()
    }, [])

    return{
        dataCoupon,
        deleteCouponById,
    }
}

export default ViewModelManageCoupon;