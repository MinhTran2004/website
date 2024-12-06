import { error } from "console";
import { useRef, useState } from "react"

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

    const createProduct = async () => {
        
        
    }


    return {
        name, price, quantity, category, image, describe,
        setName, setPrice, setQuantity, setCategory, setImage, setDescribe,
        errorName, errorPrice, errorQuantity, errorCategory, errorImage, errorDescribe,
        refName, refPrice, refQuantity, refCategory, refImage, refDescribe,
    }
}

export default ViewModelCreateProduct;