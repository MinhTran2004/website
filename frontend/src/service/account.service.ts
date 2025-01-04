import axios from "axios";
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../config/firebase-config";

export default class AccountService {
    static url = 'http://localhost:5001/account';

    static getAllAccount = async () => {
        try {
            const accountsCollectionRef = collection(db, "accounts");
            const querySnapshot = await getDocs(accountsCollectionRef);
            const reponse = querySnapshot.docs.map((item) => {
                const data = item.data();
                return {
                    _id: item.id,
                    account: data.account,
                    password: data.password,
                    role: data.role,
                    createdAt: data.createAt,
                    status: data.status,
                }
            })
            return reponse || [];
        } catch (err) {
            console.log(err);
        }
    }
    static searchAccount = async (filter: string, email: string) => {
        try {
            const accountsCollectionRef = collection(db, "accounts");

            const q = query(
                accountsCollectionRef,
                where(filter.toLocaleLowerCase(), ">=", email),  // Tìm kiếm chuỗi có chứa
                where(filter.toLocaleLowerCase(), "<=", email + "\uf8ff")  // Kết thúc tìm kiếm
            );

            const querySnapshot = await getDocs(q);
            const reponse = querySnapshot.docs.map((item) => {
                const data = item.data();
                return {
                    _id: item.id,
                    account: data.account,
                    password: data.password,
                    role: data.role,
                    createdAt: data.createAt,
                    status: data.status,
                }
            })
            return reponse || [];
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
            const accountDocRef = doc(db, "accounts", id);
            await updateDoc(accountDocRef, { status });
            return true;
        } catch (err) {
            console.log(err);
        }
    }

}