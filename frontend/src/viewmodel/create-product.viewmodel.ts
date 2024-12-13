import { error } from "console";
import { useRef, useState } from "react"
import ModelAccount from "../model/account.model";
import ProductModel from "../model/product.model";
import ProductService from "../service/product.service";
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
        console.log("Hàm createProduct được gọi"); // Log kiểm tra
        const isValid = checkData();
        if (!isValid) {
            console.log("Dữ liệu không hợp lệ"); // Log nếu dữ liệu không hợp lệ
            return;
        }
        
        const productData = {
            name,
            price: parseFloat(price),
            quantity: parseInt(quantity),
            idCategory: category || "default_category_id", // Gán giá trị mặc định nếu `category` rỗng
            image,
            describe,
        };        
    
        console.log("Dữ liệu gửi đến API:", productData); // Log dữ liệu gửi lên API
    
        try {
            const response = await ProductService.createProduct(productData);
            console.log("Phản hồi từ API:", response); // Log kết quả từ API
    
            if (response) {
                alert("Tạo sản phẩm thành công!");
                setInputNull();
            } else {
                alert("Tạo sản phẩm thất bại. Hãy kiểm tra dữ liệu.");
            }
        } catch (err) {
            console.error("Lỗi khi gọi API tạo sản phẩm:", err);
            alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
        }
    };
    

    // Hàm kiểm tra dữ liệu (bạn có thể tự định nghĩa lại phương thức checkData ở đây)
    const checkData = () => {
        let isValid = true;
    
        if (!name) {
            setErrorName("Tên sản phẩm là bắt buộc");
            isValid = false;
        } else {
            setErrorName(""); // Xóa lỗi nếu hợp lệ
        }
    
        if (!price) {
            setErrorPrice("Giá sản phẩm là bắt buộc");
            isValid = false;
        } else {
            setErrorPrice("");
        }
    
        if (!quantity) {
            setErrorQuantity("Số lượng sản phẩm là bắt buộc");
            isValid = false;
        } else {
            setErrorQuantity("");
        }
    
        if (!category) {
            setErrorCategory("Thể loại sản phẩm là bắt buộc");
            isValid = false;
        } else {
            setErrorCategory("");
        }
    
        if (!image) {
            setErrorImage("Ảnh sản phẩm là bắt buộc");
            isValid = false;
        } else {
            setErrorImage("");
        }
    
        if (!describe) {
            setErrorDescribe("Mô tả sản phẩm là bắt buộc");
            isValid = false;
        } else {
            setErrorDescribe("");
        }
    
        return isValid;
    };
    
    

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
        name, price, quantity, category, image, describe,
        setName, setPrice, setQuantity, setCategory, setImage, setDescribe,
        errorName, errorPrice, errorQuantity, errorCategory, errorImage, errorDescribe,
        refName, refPrice, refQuantity, refCategory, refImage, refDescribe,
    }
}

export default ViewModelCreateProduct;