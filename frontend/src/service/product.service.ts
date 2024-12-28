import axios from "axios";
import ProductModel, { Product } from "../model/product.model";

export default class ProductService {
    static url = 'http://localhost:5000/product';

    static createProduct = async (data: ProductModel) => {
        try {
            const reponse = (await axios.post(`${this.url}/createProduct`, data)).data;
            return reponse.status;
        } catch (err) {
            console.log(err);
        }
    }

    static getAllProduct = async (page: number) => {
        try {
            const reponse = (await axios.get(`${this.url}/getAllProduct`, {
                params: {
                    page: page
                }
            })).data;

            if (reponse.status) {
                return reponse.data;
            } else {
                return [];
            }
        } catch (err) {
            console.log(err);
        }
    }
    
    static searchProductByName = async (name: string) => {
         
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

    static updateProduct = async (id: string, data: ProductModel) => {
        try {
            const reponse = await axios.put(`${this.url}/updateProduct`, {
                id: id,
                data: data,
            });
            return reponse.data.status;
        } catch (err) {
            console.log(err);
        }
    }

}