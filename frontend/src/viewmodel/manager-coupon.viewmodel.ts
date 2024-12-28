import { useEffect, useRef, useState } from "react"
import ModelCoupon, { Coupon } from "../model/coupon.model"
import CouponService from "../service/coupon.service";
import { format } from 'date-fns';
import { GetDay } from "../hook/GetDay";
import axios from "axios";

const ViewModelManageCoupon = () => {
    const [dataCoupon, setDataCoupon] = useState<Coupon[]>([]);

    const getAllCoupon = async () => {
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

    const searchCoupon = async (nameSreach: string) => {
        if (nameSreach.trim().length === 0) {
            await getAllCoupon();
        }else{
            const reponse = await CouponService.searchCoupon(nameSreach);
            setDataCoupon(reponse)
        }
    }

    useEffect(() => {
        getAllCoupon()
    }, [])

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [discount, setDiscount] = useState('');
    const [condition, setCondition] = useState('');
    const [describe, setDescribe] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [datePickStart, setDatePickStart] = useState<Date | null>(null);
    const [datePickEnd, setDatePickEnd] = useState<Date | null>(null);

    // error
    const [errorName, setErrorName] = useState('');
    const [errorQuantity, setErrorQuantity] = useState('');
    const [errorDiscount, setErrorDiscount] = useState('');
    const [errorCondition, setErrorCondition] = useState('');
    const [errorStartdate, setErrorStartdate] = useState('');
    const [errorEnddate, setErrorEnddate] = useState('');
    const [errorDescribe, setErrorDescribe] = useState('');

    // ref
    const refName = useRef<HTMLInputElement>(null);
    const refQuantity = useRef<HTMLInputElement>(null);
    const refDiscount = useRef<HTMLInputElement>(null);
    const refCondition = useRef<HTMLInputElement>(null);
    const refStartdate = useRef<HTMLInputElement>(null);
    const refEnddate = useRef<HTMLInputElement>(null);
    const refDescribe = useRef<HTMLInputElement>(null);

    // dialog
    const [dialogSuccess, setDialogSuccess] = useState(false);
    const [dialogError, setDialogError] = useState(false);

    const handleDateStart = (date: Date | null) => {
        if (date) {
            setDatePickStart(date);
            const formattedDate = format(date, 'd/M/yyyy');
            setDateStart(formattedDate);
        } else {
            setDateStart('');
        }
    };

    const handleDateEnd = (date: Date | null) => {
        if (date) {
            setDatePickEnd(date);
            const formattedDate = format(date, 'd/M/yyyy');
            setDateEnd(formattedDate);
        } else {
            setDateEnd('');
        }
    };


    const updateCoupon = async (id: string) => {
        const check = ModelCoupon.checkData(name, quantity, discount, condition, dateStart, dateEnd, describe,
            setErrorName, setErrorQuantity, setErrorDiscount, setErrorCondition, setErrorStartdate, setErrorEnddate, setErrorDescribe,
            refName, refQuantity, refDiscount, refCondition, refStartdate, refEnddate, refDescribe
        );

        if (check) {
            const couponModel = new ModelCoupon(name, discount, quantity, condition, dateStart, dateEnd, describe, GetDay(), "Đang sử dụng");
            const reponse = await CouponService.updateFullOrder(id, couponModel);
            if (reponse) {
                await getAllCoupon();
                setDialogSuccess(true);
            } else {
                setDialogError(true);
            }
        }
    }

    return {
        dataCoupon,
        deleteCouponById,
        name, quantity, discount, condition, dateStart, dateEnd, describe, dialogError, dialogSuccess,
        setName, setQuantity, setDiscount, setCondition, setDateStart, setDateEnd, setDescribe, setDialogError, setDialogSuccess,
        errorName, errorQuantity, errorDiscount, errorCondition, errorStartdate, errorEnddate, errorDescribe,
        refName, refQuantity, refDiscount, refCondition, refStartdate, refEnddate, refDescribe,
        handleDateStart, handleDateEnd, datePickEnd, datePickStart, updateCoupon, searchCoupon,
    }
}

export default ViewModelManageCoupon;