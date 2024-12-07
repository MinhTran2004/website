import { useRef, useState } from "react"
import ModelCoupon from "../model/coupon.model";

const ViewModelCreateCoupon = () =>{
    // vale
    const[name, setName] = useState('');
    const[category, setCategory] = useState('');
    const[quantity, setQuantity] = useState('');
    const[discount, setDiscount] = useState('');
    const[value, setValue] = useState('');
    const[condition, setCondition] = useState('');
    const[image, setImage] = useState('');
    const[startdate, setStartdate] = useState('');
    const[enddate, setEnddate] = useState('');
    const[describe, setDescribe] = useState('');

    // error
    const[errorName, setErrorName] = useState('');
    const[errorCategory, setErrorCategory] = useState('');
    const[errorQuantity, setErrorQuantity] = useState('');
    const[errorDiscount, setErrorDiscount] = useState('');
    const[errorValue, setErrorValue] = useState('');
    const[errorCondition, setErrorCondition] = useState('');
    const[errorImage, setErrorImage] = useState('');
    const[errorStartdate, setErrorStartdate] = useState('');
    const[errorEnddate, setErrorEnddate] = useState('');
    const[errorDescribe, setErrorDescribe] = useState('');

    // ref
    const refName = useRef<HTMLInputElement>(null);
    const refCategory = useRef<HTMLInputElement>(null);
    const refQuantity = useRef<HTMLInputElement>(null);
    const refDiscount = useRef<HTMLInputElement>(null);
    const refValue = useRef<HTMLInputElement>(null);
    const refCondition = useRef<HTMLInputElement>(null);
    const refImage = useRef<HTMLInputElement>(null);
    const refStartdate = useRef<HTMLInputElement>(null);
    const refEnddate = useRef<HTMLInputElement>(null);
    const refDescribe = useRef<HTMLInputElement>(null);

    const createCoupon = async () =>{
        ModelCoupon.checkData(name, category, quantity, discount, value, condition,image, startdate, enddate, describe,
                             setErrorName, setErrorCategory, setErrorQuantity, setErrorDiscount, setErrorValue, setErrorCondition, setErrorImage, setErrorStartdate, setErrorEnddate, setErrorDescribe,
                              refName, refCategory, refQuantity, refDiscount, refValue, refCondition, refImage, refStartdate, refEnddate, refDescribe
        );

    }

    const setInputNull = () =>{
        setName('');
        setCategory('');
        setQuantity('');
        setDiscount('');
        setValue('');
        setCondition('');
        setImage('');
        setStartdate('');
        setEnddate('');
        setDescribe('');
    }


    return {
        setInputNull,
        createCoupon,
        name, category, quantity,  discount, value, condition, image, startdate, enddate, describe,
        setName,setCategory, setQuantity, setDiscount, setValue, setCondition, setImage, setStartdate, setEnddate, setDescribe,
        errorName, errorCategory, errorQuantity, errorDiscount, errorValue, errorCondition, errorImage, errorStartdate, errorEnddate, errorDescribe,
        refName, refCategory, refQuantity, refDiscount, refValue, refCondition, refImage, refStartdate, refEnddate,refDescribe,
    }

    
}

export default ViewModelCreateCoupon;

