import axios from "axios";

export default class CouponService {
    static url = 'http://localhost:5000/coupon';
    
    static getAllCoupon = async () => {
        try{
            const reponse = (await axios.get(`${this.url}/getAllCoupon`)).data;
            if(reponse.status){
                return reponse.data;
            }else{
                return [];
            }
            
        }catch(err){
            console.log(err);
        }
    }
}