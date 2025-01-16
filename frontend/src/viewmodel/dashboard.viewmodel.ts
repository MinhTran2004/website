import { useEffect, useState } from "react";
import { OrderService } from "../service/order.service";

export interface DataDate {
    year: number,
    month: number,
    revenue: number,
    order: number,
}

const ViewmodelDashboard = () => {
    const [dataDate, setDataDate] = useState<DataDate[]>([]);
    const [year, setYear] = useState('2025');
    const [errorYear, setErrorYear] = useState('');

    const getOrderDataForDashboard = async () => {
        const reponse = await OrderService.getOrderDataForDashboard(year);
        setDataDate(reponse);
    }

    useEffect(() => {
        getOrderDataForDashboard();
    }, [])

    return {
        dataDate, year, setYear, errorYear, setErrorYear,getOrderDataForDashboard,
    }

}


export default ViewmodelDashboard;