import { useEffect, useState } from "react"
import { OrderService } from "../service/order.service";
import { Order } from "../model/order.model";

const ViewModelOrderSuccess = () => {
    const [dataOrder, setDataOrder] = useState<Order[]>([]);

    const getAllBillByStatus = async () => {
        const reponse = await OrderService.getAllBillByStatus('Hoàn thành');
        setDataOrder(reponse);
    }

    const getAllOrderByFilter = async (filter: string, name: string) => {
        const reponse = await OrderService.getAllOrderByFilter(filter, name, 'Hoàn thành');

        if (!name) {
            await getAllBillByStatus();
        } else if (reponse != null) {
            setDataOrder(reponse);
        }
    }

    useEffect(() => {
        getAllBillByStatus();
    }, [])

    return {
        dataOrder, getAllOrderByFilter,
    }
}

export default ViewModelOrderSuccess;