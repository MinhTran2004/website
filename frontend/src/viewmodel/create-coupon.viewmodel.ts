import { useRef, useState } from "react"
import ModelCoupon from "../model/coupon.model";
import { format } from 'date-fns';
import CouponService from "../service/coupon.service";
import { GetDay } from "../hook/GetDay";

const ViewModelCreateCoupon = () => {
    // vale
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [discount, setDiscount] = useState('');
    const [value, setValue] = useState('');
    const [condition, setCondition] = useState('');
    const [image, setImage] = useState('');
    const [describe, setDescribe] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');

    const [datePickStart, setDatePickStart] = useState<Date | null>(null);
    const [datePickEnd, setDatePickEnd] = useState<Date | null>(null);

    // error
    const [errorName, setErrorName] = useState('');
    // const [errorCategory, setErrorCategory] = useState('');
    const [errorQuantity, setErrorQuantity] = useState('');
    const [errorDiscount, setErrorDiscount] = useState('');
    // const [errorValue, setErrorValue] = useState('');
    const [errorCondition, setErrorCondition] = useState('');
    const [errorStartdate, setErrorStartdate] = useState('');
    const [errorEnddate, setErrorEnddate] = useState('');
    const [errorDescribe, setErrorDescribe] = useState('');

    // ref
    const refName = useRef<HTMLInputElement>(null);
    // const refCategory = useRef<HTMLInputElement>(null);
    const refQuantity = useRef<HTMLInputElement>(null);
    const refDiscount = useRef<HTMLInputElement>(null);
    // const refValue = useRef<HTMLInputElement>(null);
    const refCondition = useRef<HTMLInputElement>(null);
    // const refImage = useRef<HTMLInputElement>(null);
    const refStartdate = useRef<HTMLInputElement>(null);
    const refEnddate = useRef<HTMLInputElement>(null);
    const refDescribe = useRef<HTMLInputElement>(null);

    // dialog
    const [dialogSuccess, setDialogSuccess] = useState(false);
    const [dialogError, setDialogError] = useState(false);

    const createCoupon = async () => {
        const check = ModelCoupon.checkData(name, quantity, discount, condition, dateStart, dateEnd, describe,
            setErrorName, setErrorQuantity, setErrorDiscount, setErrorCondition, setErrorStartdate, setErrorEnddate, setErrorDescribe,
            refName, refQuantity, refDiscount, refCondition, refStartdate, refEnddate, refDescribe
        );

        if (check) {
            const couponModel = new ModelCoupon(name, discount, quantity, condition, dateStart, dateEnd, describe, GetDay(), "Đang sử dụng");
            const reponse = await CouponService.createCoupon(couponModel);
            if (reponse) {
                setDialogSuccess(true);
                console.log(reponse);
            } else {
                setDialogError(true);
            }
        }
    }

    const setInputNull = () => {
        setName('');
        setCategory('');
        setQuantity('');
        setDiscount('');
        setValue('');
        setCondition('');
        setImage('');
        setDateStart('');
        setDateEnd('');
        setDescribe('');
    }

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

    return {
        setInputNull,
        createCoupon,
        name, category, quantity, discount, value, condition, image, dateStart, dateEnd, describe, dialogError, dialogSuccess,
        setName, setCategory, setQuantity, setDiscount, setValue, setCondition, setImage, setDateStart, setDateEnd, setDescribe, setDialogError, setDialogSuccess,
        errorName, errorQuantity, errorDiscount, errorCondition, errorStartdate, errorEnddate, errorDescribe,
        refName, refQuantity, refDiscount, refCondition, refStartdate, refEnddate, refDescribe,
        handleDateStart, handleDateEnd, datePickEnd, datePickStart,
    }


}

export default ViewModelCreateCoupon;

