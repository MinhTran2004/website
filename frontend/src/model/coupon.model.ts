import { RefObject } from "react";

export interface Coupon {
    _id: string;
    name: string;
    discountValue: string;
    quantity: string;
    condition: string;
    startDate: string;
    endDate: string;
    describe: string;
    createAt:string;
    status: string;
}

export default class ModelCoupon {
    name: string;
    discountValue: string;
    quantity: string;
    condition: string;
    startDate: string;
    endDate: string;
    describe: string;
    createAt:string;
    status: string;

    constructor(name: string, discountValue: string, quantity: string, condition: string, startDate: string, endDate: string, describe: string, createAt:string, status: string) {
        this.name = name;
        this.discountValue = discountValue;
        this.quantity = quantity;
        this.condition = condition;
        this.startDate = startDate;
        this.endDate = endDate;
        this.describe = describe;
        this.createAt = createAt;
        this.status = status;
    }

    static checkData(
        name: string,
        quantity: string,
        discount: string,
        condition: string,
        startdate: string,
        enddate: string,
        describe: string,
        setErrorUsername: (error: string) => void,
        setErrorQuantity: (error: string) => void,
        setErrorDiscount: (error: string) => void,
        setErrorCondition: (error: string) => void,
        setErrorStartdate: (error: string) => void,
        setErrorEnddate: (error: string) => void,
        setErrorDescribe: (error: string) => void,
        refName: RefObject<HTMLInputElement>,
        refQuantity: RefObject<HTMLInputElement>,
        refDiscount: RefObject<HTMLInputElement>,
        refCondition: RefObject<HTMLInputElement>,
        refStartdate: RefObject<HTMLInputElement>,
        refEnddate: RefObject<HTMLInputElement>,
        refDescribe: RefObject<HTMLInputElement>
    ) {
        setErrorUsername('');
        setErrorQuantity('');
        setErrorDiscount('');
        setErrorCondition('');
        setErrorStartdate('');
        setErrorEnddate('');
        setErrorDescribe('');

        if (name === '') {
            setErrorUsername('Không được để trống dữ liệu');
            refName.current?.focus();
            return false;
        };

        if (discount === '') {
            setErrorDiscount('Không được để trống dữ liệu');
            refDiscount.current?.focus();
            return false;
        };

        if (quantity === '') {
            setErrorQuantity('Không được để trống dữ liệu');
            refQuantity.current?.focus();
            return false;
        };

        if (condition === '') {
            setErrorCondition('Không được để trống dữ liệu');
            refCondition.current?.focus();
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
        return true;
    }
}