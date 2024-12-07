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

    useEffect(() =>{
        getAllCoupon()
    }, [])

    return{
        dataCoupon,
    }
}

export default ViewModelManageCoupon;