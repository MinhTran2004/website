import { useEffect, useState } from "react"
import { Account } from "../model/account.model"
import AccountService from "../service/account.service";

const ViewModelAccount4 = () => {
    const [dataAccount, setDataAccount] = useState<Account[]>([]);

    const getAllAccount = async () => {
        const reponse = await AccountService.getAllAccount();
        setDataAccount(reponse);
    }

    useEffect(() => {
        getAllAccount();
    }, [])

    return{
        dataAccount,
    }

}