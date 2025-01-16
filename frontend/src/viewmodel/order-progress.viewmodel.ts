import { useEffect, useState } from "react"
import { OrderService } from "../service/order.service";
import { Order } from "../model/order.model";
import { GetDay } from "../hook/GetDay";

const ViewModelOrderProgress = () => {
    const [dataOrder, setDataOrder] = useState<Order[]>([]);
    const [activeStep, setActiveStep] = useState(0);
    const [dialogError, setDialogError] = useState(false);

    const getAllBillByStatus = async () => {
        const reponse = await OrderService.getAllBillByStatus('Đang tiến hành');
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
        const reponse = await OrderService.getAllOrderByFilter(filter, name, 'Đang tiến hành');

        if (!name) {
            await getAllBillByStatus();
        } else if (reponse != null) {
            setDataOrder(reponse);
        }
    }

    const updateQuantityProductBuy = async (id: string) => {
        const reponse = await OrderService.updateQuantityProductBuy(id);

        if (reponse.status) {
            await getAllBillByStatus();
        } else {
            setDialogError(true);
        }
    }

    useEffect(() => {
        getAllBillByStatus();
    }, [])

    return {
        dataOrder, activeStep, setActiveStep, updateStatusOrder, getAllOrderByFilter, updateQuantityProductBuy, dialogError, setDialogError
    }
}

export default ViewModelOrderProgress;