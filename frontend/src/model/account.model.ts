import { RefObject } from "react";

export interface Account {
    _id: string;
    username: string;
    account: string;
    password: string;
    image: string;
    phone: string;
    role: string;
    createdAt: String;
    updatedAt: String;
    status: string;
}

export default class ModelAccount {
    username: string;
    account: string;
    password: string;
    role: string;
    status: string;

    constructor(username: string, account: string, password: string, role: string, status: string) {
        this.username = username;
        this.account = account;
        this.password = password;
        this.role = role;
        this.status = status;
    }

    static checkData = (name:string, price:string, quantity:string, category:string, image:string, describe:string,
        setErrorName: (error:string) => void, setErrorPrice: (error:string) => void, setErrorQuantity: (error:string) => void, setErrorCategory: (error:string) => void, setErrorImage: (error:string) => void, setDescribe: (error:string) => void,
        refName:RefObject<HTMLInputElement>, refPrice:RefObject<HTMLInputElement>, refQuantity:RefObject<HTMLInputElement>, refCategory:RefObject<HTMLInputElement>, refImage:RefObject<HTMLInputElement>, refDescribe:RefObject<HTMLInputElement>) =>{
            setErrorName('');
            setErrorPrice('');
            setErrorQuantity('');
            setErrorCategory('');
            setErrorImage('');

            if(name === ''){
                setErrorName('Không được để trống dữ liệu');
                refName.current?.focus();
                return false;
            };

            if(price === ''){
                setErrorPrice('Không được để trống dữ liệu');
                refPrice.current?.focus();
                return false;
            };

            if(quantity === ''){
                setErrorQuantity('Không được để trống dữ liệu');
                refQuantity.current?.focus();
                return false;
            };

            if(category === ''){
                setErrorCategory('Không được để trống dữ liệu');
                refCategory.current?.focus();
                return false;
            };

            if(image === ''){
                setErrorImage('Không được để trống dữ liệu');
                refImage.current?.focus();
                return false;
            };

            // if(describe === ''){
            //     setErro('Không được để trống dữ liệu');
            //     refName.current?.focus();
            //     return false;
            // };
            
            
        }
}