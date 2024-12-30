import { useEffect, useRef, useState } from "react"
import ProductModel, { Product } from "../model/product.model";
import ProductService from "../service/product.service";
import { GetDay } from "../hook/GetDay";

const ViewModelManageProduct = () => {
    const [dataProduct, setDataProduct] = useState<Product[]>([]);
    const [dialogDeleteSuccess, setDialogDeleteSuccess] = useState(false);
    

    const getAllProduct = async () => {
        const reponse = await ProductService.getAllProduct(0);
        setDataProduct(reponse);
    }

    const searchProduct = async (filter: string, nameSearch: string) => {
        if (nameSearch.trim() === "") {
            await getAllProduct();
        } else {
            const response = await ProductService.searchProductByName(filter.trim(), nameSearch.trim());
            setDataProduct(response);
        }
    };

    const deleteProduct = async (id: string) => {
        try {
            const success = await ProductService.deleteProductById(id);
            if (success) {
                setDataProduct((prev) => prev.filter((product) => product._id !== id)); 
                setDialogDeleteSuccess(true)
            } else {
                alert("Không thể xóa sản phẩm, thử lại sau!");
            }
        } catch (err) {
            console.error("Có lỗi khi xóa sản phẩm:", err);
            alert("Có lỗi khi xóa sản phẩm");
        }
    };
    useEffect(() => {
        getAllProduct();
    }, [])

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

    const updateProduct = async (id: string) => {
        const check = ProductModel.checkData(
            name, price, quantity, category, image, describe,
            setErrorName, setErrorPrice, setErrorQuantity, setErrorCategory, setErrorImage, setErrorDescribe,
            refName, refPrice, refQuantity, refCategory, refImage, refDescribe
        );

        if (check) {
            const dataModel = new ProductModel(category, name, price, image, quantity, describe, GetDay(), 'Đang sử dụng');
            const reponse = await ProductService.updateProduct(id, dataModel);
            if (reponse) {
                await getAllProduct();
                setDialogSuccess(true);
            } else {
                setDialogError(true);
            }
        }
    }

    return {
        name, price, quantity, category, image, describe, dialogSuccess, dialogError,dialogDeleteSuccess, 
        setName, setPrice, setQuantity, setCategory, setImage, setDescribe, setDialogError, setDialogSuccess, setDialogDeleteSuccess,
        errorName, errorPrice, errorQuantity, errorCategory, errorImage, errorDescribe,
        refName, refPrice, refQuantity, refCategory, refImage, refDescribe,
        dataProduct,
        searchProduct,
        deleteProduct, updateProduct
    }

}

export default ViewModelManageProduct;