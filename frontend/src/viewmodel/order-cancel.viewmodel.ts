import { useEffect, useState } from "react"
import { OrderService } from "../service/order.service";
import { Order } from "../model/order.model";

const ViewModelOrderCancel = () => {
    const [dataOrder, setDataOrder] = useState<Order[]>([]);

    const getAllBillByStatus = async () => {
        const reponse = await OrderService.getAllBillByStatus('Đã hủy');
        setDataOrder(reponse);
    }

    useEffect(() => {
        getAllBillByStatus();
    }, [])

    return {
        dataOrder,
    }
}

export default ViewModelOrderCancel;