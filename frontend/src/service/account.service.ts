import axios from "axios";
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../config/firebase-config";

export default class AccountService {
    static url = 'http://localhost:5001/account';

    static getAllAccount = async () => {
        try {
            const reponse = (await axios.get(`${this.url}/getAllAccount`)).data;
            return reponse || [];
        } catch (err) {
            console.log(err);
        }
    }
    static searchAccount = async (filter: string, email: string) => {
        try {
            const response = (await axios.get(`${this.url}/getAccountByEmail`, {
                params: {
                    filter: filter,
                    account: email
                }
            })).data;
            return response.data || [];
        } catch (err) {
            console.log(err);
            return [];
        }
    };
    static deleteAccountById = async (id: string) => {
        try {
            const response = (await axios.delete(`${this.url}/deleteAccountById/${id}`)).data;
            return response.status; // Trả về true hoặc false dựa trên status API
        } catch (err) {
            console.log(err);
            return false; // Nếu có lỗi xảy ra, trả về false
        }
    };

    static updateStatusAccountById = async (id: string, status: string) => {
        try {
            const response = (await axios.patch(`${this.url}/updateStatusAccountById`, {
                id, status,
            })).data;
            return response;
        } catch (err) {
            console.log(err);
        }
    }

}