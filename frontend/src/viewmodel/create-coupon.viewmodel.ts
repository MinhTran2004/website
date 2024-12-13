import { useRef, useState } from "react"
import ModelCoupon from "../model/coupon.model";
import CouponService from "../service/coupon.service";
const ViewModelCreateCoupon = () =>{
    // vale
    const[name, setName] = useState('');
    const[discountType, setdiscountType] = useState('');
    const[quantity, setQuantity] = useState('');
    const[discount, setDiscount] = useState('');
    const[maxDisCount, setmaxDisCount] = useState('');
    const[condition, setCondition] = useState('');
    const[image, setImage] = useState('');
    const[startdate, setStartdate] = useState('');
    const[enddate, setEnddate] = useState('');
    const[describe, setDescribe] = useState('');

    // error
    const[errorName, setErrorName] = useState('');
    const[errordiscountType, setErrordiscountType] = useState('');
    const[errorQuantity, setErrorQuantity] = useState('');
    const[errorDiscount, setErrorDiscount] = useState('');
    const[errormaxDisCount, setErrormaxDisCount] = useState('');
    const[errorCondition, setErrorCondition] = useState('');
    const[errorImage, setErrorImage] = useState('');
    const[errorStartdate, setErrorStartdate] = useState('');
    const[errorEnddate, setErrorEnddate] = useState('');
    const[errorDescribe, setErrorDescribe] = useState('');

    // ref
    const refName = useRef<HTMLInputElement>(null);
    const refdiscountType = useRef<HTMLInputElement>(null);
    const refQuantity = useRef<HTMLInputElement>(null);
    const refDiscount = useRef<HTMLInputElement>(null);
    const refmaxDisCount = useRef<HTMLInputElement>(null);
    const refCondition = useRef<HTMLInputElement>(null);
    const refImage = useRef<HTMLInputElement>(null);
    const refStartdate = useRef<HTMLInputElement>(null);
    const refEnddate = useRef<HTMLInputElement>(null);
    const refDescribe = useRef<HTMLInputElement>(null);

    const createCoupon = async () => {
        // Kiểm tra dữ liệu đầu vào và xử lý lỗi
        if (!name || !quantity || !discount || !maxDisCount || !condition || !image || !startdate || !enddate || !describe) {
            alert("Vui lòng điền đầy đủ thông tin!");
            return;
        }
    
        // Chuyển đổi startdate và enddate thành đối tượng Date
        const startDate = new Date(startdate);  // Đảm bảo rằng startdate là một Date hợp lệ
        const endDate = new Date(enddate);  // Đảm bảo rằng enddate là một Date hợp lệ
    
        // Kiểm tra xem startDate và endDate có hợp lệ không
        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            alert("Ngày bắt đầu hoặc ngày kết thúc không hợp lệ!");
            return;
        }
    
        const couponData = {
            name,
            discountType,
            quantity,
            discount,
            maxDisCount,
            condition,
            image,
            startDate,  // Dùng startDate là đối tượng Date
            endDate,    // Dùng endDate là đối tượng Date
            describe
        };
    
        const response = await CouponService.createCoupon(couponData);
    
        if (response.status) {
            alert('Tạo mã giảm giá thành công!');
            setInputNull(); // Reset input sau khi tạo thành công
        } else {
            alert('Có lỗi xảy ra khi tạo mã giảm giá');
        }
    };
    

    const setInputNull = () =>{
        setName('');
        setdiscountType('');
        setQuantity('');
        setDiscount('');
        setmaxDisCount('');
        setCondition('');
        setImage('');
        setStartdate('');
        setEnddate('');
        setDescribe('');
    }


    return {
        setInputNull,
        createCoupon,
        name, discountType, quantity,  discount, maxDisCount, condition, image, startdate, enddate, describe,
        setName,setdiscountType, setQuantity, setDiscount, setmaxDisCount, setCondition, setImage, setStartdate, setEnddate, setDescribe,
        errorName, errordiscountType, errorQuantity, errorDiscount, errormaxDisCount, errorCondition, errorImage, errorStartdate, errorEnddate, errorDescribe,
        refName, refdiscountType, refQuantity, refDiscount, refmaxDisCount, refCondition, refImage, refStartdate, refEnddate,refDescribe,
    }

    
}

export default ViewModelCreateCoupon;

