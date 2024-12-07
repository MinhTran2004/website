import { RefObject } from "react";
import ViewModelCreateCoupon from "../viewmodel/create-coupon.viewmodel";

export interface Coupon {
    _id: string;
    name: string;
    image: string;
    discountType: string;
    discountValue: string;
    maxDisCount: number;
    quantity: number;
    condition: number;
    startDate: string;
    endDate: string;
    describe: string;
    status: string;
}

export default class ModelCoupon {
    name: string;
    image: string;
    discountType: string;
    discountValue: string;
    maxDisCount: number;
    quantity: number;
    condition: number;
    startDate: string;
    endDate: string;
    describe: string;
    status: string;



    constructor(name: string, image: string, discountType: string, discountValue: string, maxDisCount: number, quantity: number, condition: number, startDate: string, endDate: string, describe: string, status: string) {
        this.name = name;
        this.image = image;
        this.discountType = discountType;
        this.discountValue = discountValue;
        this.maxDisCount = maxDisCount;
        this.quantity = quantity;
        this.condition = condition;
        this.startDate = startDate;
        this.endDate = endDate;
        this.describe = describe;
        this.status = status;


    }


    static checkData(
        name: string, category: string, quantity: string, discount: string, value: string, condition: string, image: string, startdate: string, enddate: string, describe: string,
        setErrorUsername: (error: string) => void, setErrorCategory: (error: string) => void, setErrorQuantity: (error: string) => void, setErrorDiscount: (error: string) => void, setErrorValue: (error: string) => void, setErrorCondition: (error: string) => void, setErrorImage: (error: string) => void, setErrorStartdate: (error: string) => void, setErrorEnddate: (error: string) => void, setErrorDescribe: (error: string) => void,
        refName: RefObject<HTMLInputElement>, refCategory: RefObject<HTMLInputElement>, refQuantity: RefObject<HTMLInputElement>, refDiscount: RefObject<HTMLInputElement>, refValue: RefObject<HTMLInputElement>, refCondition: RefObject<HTMLInputElement>, refImage: RefObject<HTMLInputElement>, refStartdate: RefObject<HTMLInputElement>, refEnddate: RefObject<HTMLInputElement>, refDescribe: RefObject<HTMLInputElement>
    ) {
        setErrorUsername('');
        setErrorCategory('');
        setErrorQuantity('');
        setErrorDiscount('');
        setErrorValue('');
        setErrorCondition('');
        setErrorImage('');
        setErrorStartdate('');
        setErrorEnddate('');
        setErrorDescribe('');

        if (name === '') {
            setErrorUsername('Không được để trống dữ liệu');
            refName.current?.focus();
            return false;
        };

        if (category === '') {
            setErrorCategory('Không được để trống dữ liệu');
            refCategory.current?.focus();
            return false;
        };

        if (quantity === '') {
            setErrorQuantity('Không được để trống dữ liệu');
            refQuantity.current?.focus();
            return false;
        };

        if (discount === '') {
            setErrorDiscount('Không được để trống dữ liệu');
            refDiscount.current?.focus();
            return false;
        };
        if (value === '') {
            setErrorValue('Không được để trống dữ liệu');
            refValue.current?.focus();
            return false;
        };

        if (condition === '') {
            setErrorCondition('Không được để trống dữ liệu');
            refCondition.current?.focus();
            return false;
        };

        if (image === '') {
            setErrorImage('Không được để trống dữ liệu');
            refImage.current?.focus();
            return false;
        };

        if (startdate === '') {
            setErrorStartdate('Không được để trống dữ liệu');
            refStartdate.current?.focus();
            return false;
        };

        if (enddate === '') {
            setErrorEnddate('Không được để trống dữ liệu');
            refEnddate.current?.focus();
            return false;
        };

        if (describe === '') {
            setErrorDescribe('Không được để trống dữ liệu');
            refDescribe.current?.focus();
            return false;
        };







    }




}