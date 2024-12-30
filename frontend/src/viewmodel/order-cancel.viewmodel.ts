import { useEffect, useState } from "react"
import { OrderService } from "../service/order.service";
import { Order } from "../model/order.model";

const ViewModelOrderCancel = () => {
    const [dataOrder, setDataOrder] = useState<Order[]>([]);

    const getAllBillByStatus = async () => {
        const reponse = await OrderService.getAllBillByStatus('Người bán đã hủy');
        setDataOrder(reponse);
    }

    const getAllOrderByFilter = async (filter: string, name: string) => {
        const reponse = await OrderService.getAllOrderByFilter(filter, name, 'Người bán đã hủy');

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

export default ViewModelOrderCancel;