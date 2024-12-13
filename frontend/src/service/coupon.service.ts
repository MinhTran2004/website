import axios from "axios";

export default class CouponService {
    static url = 'http://localhost:5000/coupon';
    
    static createCoupon = async (data: any) => {
        try {
            const response = await axios.post(`${this.url}/createCoupon`, data);
            return response.data;  // Trả về kết quả từ API
        } catch (err) {
            console.log(err);
            return { status: false };  // Nếu có lỗi, trả về trạng thái false
        }
    };
    
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
    static deleteCouponById = async (id: string) => {
        try {
            const response = (await axios.delete(`${this.url}/deleteCouponById/${id}`)).data;
            return response.status; // Trả về true hoặc false dựa trên status API
        } catch (err) {
            console.log(err);
            return false; // Nếu có lỗi xảy ra, trả về false
        }
    };
    
}