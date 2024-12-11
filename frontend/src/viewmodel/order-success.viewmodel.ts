import { useEffect, useState } from "react"
import { OrderService } from "../service/order.service";
import { Order } from "../model/order.model";

const ViewModelOrderSuccess = () => {
    const [dataOrder, setDataOrder] = useState<Order[]>([]);

    const getAllBillByStatus = async () => {
        const reponse = await OrderService.getAllBillByStatus('Hoàn thành');
        setDataOrder(reponse);
    }

    useEffect(() => {
        getAllBillByStatus();
    }, [])

    return {
        dataOrder,
    }
}

export default ViewModelOrderSuccess;