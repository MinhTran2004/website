import { useEffect, useState } from "react"
import { Account } from "../model/account.model"
import AccountService from "../service/account.service";

const ViewModelAccount = () => {
    const [dataAccount, setDataAccount] = useState<Account[]>([]);

    const getAllAccount = async () => {
        const reponse = await AccountService.getAllAccount();
        setDataAccount(reponse);
    }

    const searchAccount = async (nameSearch: string) => {
        if (nameSearch.trim().length === 0) {
            await getAllAccount()
        } else {
            const response = await AccountService.searchAccount(nameSearch.trim());
            setDataAccount(response);
        }
    };

    useEffect(() => {
        getAllAccount()
    }, [])

    return {
        dataAccount,
        searchAccount,
    }
}

export default ViewModelAccount;