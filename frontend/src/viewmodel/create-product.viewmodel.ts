import { useRef, useState } from "react"
import ProductModel from "../model/product.model";
import ProductService from "../service/product.service";
import { GetDay } from "../hook/GetDay";

const ViewModelCreateProduct = () => {
    // vale
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [describe, setDescribe] = useState('');

    // error
    const [errorName, setErrorName] = useState('');
    const [errorPrice, setErrorPrice] = useState('');
    const [errorQuantity, setErrorQuantity] = useState('');
    const [errorCategory, setErrorCategory] = useState('');
    const [errorImage, setErrorImage] = useState('');
    const [errorDescribe, setErrorDescribe] = useState('');

    // ref
    const refName = useRef<HTMLInputElement>(null);
    const refPrice = useRef<HTMLInputElement>(null);
    const refQuantity = useRef<HTMLInputElement>(null);
    const refCategory = useRef<HTMLInputElement>(null);
    const refImage = useRef<HTMLInputElement>(null);
    const refDescribe = useRef<HTMLInputElement>(null);

    // dialog
    const [dialogSuccess, setDialogSuccess] = useState(false);
    const [dialogError, setDialogError] = useState(false);


    const createProduct = async () => {
        const check = ProductModel.checkData(
            name, price, quantity, category, image, describe,
            setErrorName, setErrorPrice, setErrorQuantity, setErrorCategory, setErrorImage, setErrorDescribe,
            refName, refPrice, refQuantity, refCategory, refImage, refDescribe
        );
        
        if (check) {
            const dataModel = new ProductModel(category, name, price, image, quantity, describe, GetDay(), 'Đang sử dụng');
            const reponse = await ProductService.createProduct(dataModel);
            console.log(reponse);
            setDialogSuccess(true);
        }else{
            setDialogSuccess(false);
        }
    }

    const setInputNull = () => {
        setName('');
        setPrice('');
        setQuantity('');
        setCategory('');
        setImage('');
        setDescribe('');
    }


    return {
        createProduct, setInputNull,
        name, price, quantity, category, image, describe, dialogSuccess, dialogError,
        setName, setPrice, setQuantity, setCategory, setImage, setDescribe, setDialogError, setDialogSuccess,
        errorName, errorPrice, errorQuantity, errorCategory, errorImage, errorDescribe,
        refName, refPrice, refQuantity, refCategory, refImage, refDescribe,
    }
}

export default ViewModelCreateProduct;