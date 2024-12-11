import { useEffect, useState } from "react"
import { Product } from "../model/product.model";
import ProductService from "../service/product.service";

const ViewModelManageProduct = () => {
    const [dataProduct, setDataProduct] = useState<Product[]>([]);
    const [name, setName] = useState("");
    const getAllProduct = async () => {
        const reponse = await ProductService.getAllProduct();
        setDataProduct(reponse);
    }
  
    const searchProduct = async () => {
        if (name.trim() === "") {
          await getAllProduct();
        } else {
          const response = await ProductService.searchProductByName(name);
          setDataProduct(response);
        }
      };
      const deleteProduct = async (id: string) => {
        try {
            const success = await ProductService.deleteProductById(id);
            if (success) {
                setDataProduct((prev) => prev.filter((product) => product._id !== id)); // Xóa khỏi danh sách hiện tại
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
    useEffect(() => {
        searchProduct();
    }, [name])

    return{
        dataProduct, name,
        searchProduct , setName,
        deleteProduct,
       
    }

}

export default ViewModelManageProduct;