import { useEffect, useState } from "react"
import { Account } from "../model/account.model"
import AccountService from "../service/account.service";
import { Product } from "../model/product.model";
import ProductService from "../service/product.service";

const ViewModelManageProduct = () => {
    const [dataProduct, setDataProdut] = useState<Product[]>([]);

    const getAllProduct = async () => {
        const reponse = await ProductService.getAllProduct();
        setDataProdut(reponse);
    }

    useEffect(() => {
        getAllProduct();
    }, [])

    return{
        dataProduct,
    }

}

export default ViewModelManageProduct;