import { useEffect, useState } from "react"
import { OrderService } from "../service/order.service";
import { Order } from "../model/order.model";

const ViewModelOrderWaiting = () => {
    const [dataOrder, setDataOrder] = useState<Order[]>([]);
    const [activeStep, setActiveStep] = useState(0);


    const getAllBillByStatus = async () => {
        const reponse = await OrderService.getAllBillByStatus('Chờ xác nhận');
        setDataOrder(reponse);
    }

    const updateStatusOrder = async (data: Order, status: string) => {
        const reponse = await OrderService.updateStatusOrder(data, status);
        await getAllBillByStatus();
    }

    useEffect(() => {
        getAllBillByStatus();
    }, [])

    return {
        dataOrder, activeStep, setActiveStep, updateStatusOrder,
    }
}

export default ViewModelOrderWaiting;