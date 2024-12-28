import { useEffect, useState } from "react"
import { OrderService } from "../service/order.service";
import { Order } from "../model/order.model";

const ViewModelOrderProgress = () => {
    const [dataOrder, setDataOrder] = useState<Order[]>([]);
    const [activeStep, setActiveStep] = useState(0);


    const getAllBillByStatus = async () => {
        const reponse = await OrderService.getAllBillByStatus('Đang tiến hành');
        setDataOrder(reponse);
    }

    const updateStatusOrder = async (id: string, status: string) => {
        const reponse = await OrderService.updateStatusOrder(id, status);
        if (reponse) {
            await getAllBillByStatus();
        } else {
            console.log('update that bai');
        }
    }

    useEffect(() => {
        getAllBillByStatus();
    }, [])

    return {
        dataOrder, activeStep, setActiveStep, updateStatusOrder,
    }
}

export default ViewModelOrderProgress;