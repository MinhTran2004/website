import { useEffect, useState } from "react"
import { OrderService } from "../service/order.service";
import { Order } from "../model/order.model";
import { GetDay } from "../hook/GetDay";

const ViewModelOrderWaiting = () => {
    const [dataOrder, setDataOrder] = useState<Order[]>([]);
    const [activeStep, setActiveStep] = useState(0);


    const getAllBillByStatus = async () => {
        const reponse = await OrderService.getAllBillByStatus('Chờ xác nhận');
        setDataOrder(reponse);
    }

    const updateStatusOrder = async (id: string, status: string) => {
        const reponse = await OrderService.updateStatusOrder(id, status, GetDay());
        if (reponse) {
            await getAllBillByStatus();
        } else {
            console.log('update that bai');
        }
    }

    const getAllOrderByFilter = async (filter: string, name: string) => {
        const reponse = await OrderService.getAllOrderByFilter(filter, name, 'Chờ xác nhận');

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
        dataOrder, activeStep, setActiveStep, updateStatusOrder, getAllOrderByFilter,
    }
}

export default ViewModelOrderWaiting;