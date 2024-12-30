import axios from "axios";

export default class AccountService {
    static url = 'http://localhost:5001/account';

    static getAllAccount = async () => {
        try {
            const reponse = (await axios.get(`${this.url}/getAllAccount`)).data;

            if (reponse.status) {
                return reponse.data;
            } else {
                return [];
            }
        } catch (err) {
            console.log(err);
        }
    }
    static searchAccount = async (fillter: string, email: string) => {
        try {
            const response = (await axios.get(`${this.url}/getAccountByEmail`, {
                params: {
                    filter: fillter.toLocaleLowerCase().toString(),
                    account: email
                }
            })).data;

            if (response.message === 'success') {
                return response.accounts;
            } else {
                return [];
            }
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
            const reponse = await axios.patch(`${this.url}/updateStatusAccountById`, {
                id: id,
                status: status
            })

            return reponse.status;
        } catch (err) {
            console.log(err);
        }
    }

}