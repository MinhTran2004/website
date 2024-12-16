import { useEffect, useState } from "react";
import { OrderService } from "../service/order.service";

export interface DataDate{
    year: number,
    month: number,
    revenue: number,
    order:number,
}

const ViewmodelDashboard = () => {
    const [dataDate, setDataDate] = useState<DataDate[]>([]);

    const getOrderDataForDashboard = async () => {
        const reponse = await OrderService.getOrderDataForDashboard();
        setDataDate(reponse);
    }

    useEffect(() => {
        getOrderDataForDashboard();
    }, [])

return {
    dataDate,
}

}


export default ViewmodelDashboard;