import axios from "axios";

export class OrderService {
    static url = 'http://localhost:5001/order';

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

    static getAllOrderByFilter = async (filter: string, name: string, status: string) => {
        try {
            const reponse = await axios.get(`${this.url}/getAllOrderByFilter`, {
                params: {
                    filter: filter.trim().toLocaleLowerCase(),
                    name: name.trim().toLocaleLowerCase(),
                    status: status.trim(),
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

    static updateStatusOrder = async (id: string, status: string, time: string) => {
        try {
            const reponse = await axios.patch(`${this.url}/updateStatusOrder`, {
                id: id,
                status: status,
                time: time,
            });

            return reponse.data.status;
        } catch (err) {
            console.log(err);
        }
    }

    static getOrderDataForDashboard = async () => {
        try {
            const reponse = (await axios.get(`${this.url}/getOrderDataForDashboard`)).data;

            if (reponse.status) {
                return reponse.data;
            } else {
                return []
            }
        } catch (err) {
            console.log(err);
        }
    }


}