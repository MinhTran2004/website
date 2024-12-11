import axios from "axios";

export class OrderService {
    static url = 'http://localhost:5000/order';

    static getAllBillByStatus = async (status: string) => {
        try {
            const reponse = await axios.get(`${this.url}/getAllBillByStatus`, {
                params: {
                    status: status,
                }
            })

            if (reponse.data.status) {
                return reponse.data.data;
            } else {
                return [];
            }

        } catch (err) {
            console.log(err);
        }
    }

    static deteleBillById = async (id: string) => {
        try {
            const reponse = await (await axios.delete(`${this.url}/deleteBillById/${id}`)).data;
            return reponse.status;
        } catch (err) {
            console.log(err);
        }
    }
}