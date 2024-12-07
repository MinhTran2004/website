import axios from "axios";
import ProductModel from "../model/product.model";

export default class ProductService {
    static url = 'http://localhost:5000/product';

    static getAllProduct = async () => {
        try{
            const reponse = (await axios.get(`${this.url}/getAllProduct`)).data;
            if(reponse.status){
                return reponse.data;
            }else{
                return[];
            }
        }catch(err){
            console.log(err);
        }
    }
}