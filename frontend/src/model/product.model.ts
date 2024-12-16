import { RefObject } from "react";

export interface Product {
    _id: string,
    category: string,
    name: string,
    price: string,
    discount: string,
    image: string,
    sold: string,
    quantity: string,
    rate: string,
    describe: string,
    createAt: string,
    status: string,
}

export default class ProductModel {
    category: string;
    name: string;
    price: string;
    image: string;
    quantity: string;
    describe: string;
    createAt: string;
    status: string;

    constructor(category: string, name: string, price: string, image: string, quantity: string, describe: string, createAt: string, status: string) {
        this.category = category;
        this.name = name;
        this.price = price;
        this.image = image;
        this.quantity = quantity;
        this.describe = describe;
        this.createAt = createAt;
        this.status = status;
    }

    static checkData(
        name: string, price: string, quantity: string, category: string, image: string, describe: string,
        setErrorName: (error: string) => void, setErrorPrice: (error: string) => void, setErrorQuantity: (error: string) => void, setErrorCategory: (error: string) => void, setErrorImage: (error: string) => void, setDescribe: (error: string) => void,
        refName: RefObject<HTMLInputElement>, refPrice: RefObject<HTMLInputElement>, refQuantity: RefObject<HTMLInputElement>, refCategory: RefObject<HTMLInputElement>, refImage: RefObject<HTMLInputElement>, refDescribe: RefObject<HTMLInputElement>
    ) {
        setErrorName('');
        setErrorPrice('');
        setErrorQuantity('');
        setErrorCategory('');
        setErrorImage('');

        if (name === '') {
            setErrorName('Không được để trống dữ liệu');
            refName.current?.focus();
            return false;
        };

        if (price === '') {
            setErrorPrice('Không được để trống dữ liệu');
            refPrice.current?.focus();
            return false;
        };

        if (quantity === '') {
            setErrorQuantity('Không được để trống dữ liệu');
            refQuantity.current?.focus();
            return false;
        };

        if (category === '') {
            setErrorCategory('Không được để trống dữ liệu');
            refCategory.current?.focus();
            return false;
        };


        if (image === '') {
            setErrorImage('Không được để trống dữ liệu');
            refImage.current?.focus();
            return false;
        };
        return true;
    }
}