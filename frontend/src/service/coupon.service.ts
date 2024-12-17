import axios from "axios";
import ModelCoupon from "../model/coupon.model";

export default class CouponService {
    static url = 'http://localhost:5000/coupon';

    static createCoupon = async (data: ModelCoupon) => {
        try {
            const reponse = (await axios.post(`${this.url}/createCoupon`, data)).data;

            return reponse.status;
        } catch (err) {
            console.log(err);
        }
    }

    static getAllCoupon = async () => {
        try {
            const reponse = (await axios.get(`${this.url}/getAllCoupon`)).data;
            if (reponse.status) {
                return reponse.data;
            } else {
                return [];
            }

        } catch (err) {
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

    static updateFullOrder = async (id: string, data: ModelCoupon) => {
        try {
            const reponse = (await axios.put(`${this.url}/updateFullOrder`, {
                id: id,
                data: data
            })).data;

            return reponse;
        } catch (err) {
            console.log(err);
        }
    }

}