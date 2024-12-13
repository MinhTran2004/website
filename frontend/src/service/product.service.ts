import axios from "axios";
interface Product {
    name: string;
    price: number;
    quantity: number;
    idCategory: string; 
    image: string;
    describe: string;
}

export default class ProductService {
    static url = 'http://localhost:5000/product';

    static getAllProduct = async () => {
        try{
            const reponse = (await axios.get(`${this.url}/getAllProduct`)).data;
            console.log(reponse);
            
            if(reponse.status){
                return reponse.data;
            }else{
                return[];
            }
        }catch(err){
            console.log(err);
        }
    }
    static searchProductByName = async (name:string) => {
        try {
            const response = (await axios.get(`${this.url}/getProductByName`, {
                params: { name }
            })).data;
            if (response.products) {
                return response.products;
            } else {
                return [];
            }
        } catch (err) {
            console.log(err);
            return [];
        }
    };
    static deleteProductById = async (id: string) => {
        try {
            const response = (await axios.delete(`${this.url}/deleteProductById/${id}`)).data;
            return response.status; // Trả về true hoặc false dựa trên status API
        } catch (err) {
            console.log(err);
            return false; // Nếu có lỗi xảy ra, trả về false
        }
    };
    static createProduct = async (productData: Product): Promise<boolean> => {
        try {
            const response = (await axios.post(`${this.url}/createProduct`, productData)).data;
            return response.status; // Trả về true nếu thành công
        } catch (err) {
            console.error('Lỗi khi gọi API tạo sản phẩm:', err);
            return false;
        }
    };
}