import { useEffect, useState } from "react"
import { Account } from "../model/account.model"
import AccountService from "../service/account.service";

const ViewModelAccount = () => {
    const [dataAccount, setDataAccount] = useState<Account[]>([]);
    const [dialog, setDialog] = useState(false);

    const getAllAccount = async () => {
       const reponse = await AccountService.getAllAccount();
        setDataAccount(reponse || []);
    }

    const searchAccount = async (filtter: string, nameSearch: string) => {
        if (nameSearch.trim().length === 0) {
            await getAllAccount()
        } else {
            const response = await AccountService.searchAccount(filtter.trim(), nameSearch.trim());
            setDataAccount(response || []);
        }
    };

    const updateStatusAccountById = async (id: string, status: string) => {
        const reponse = await AccountService.updateStatusAccountById(id, status);

        if (reponse) {
            await getAllAccount();
            setDialog(true)
        } else {
            console.log('dialog loi');
        }
    }

    useEffect(() => {
        getAllAccount()
    }, [])

    return {
        dataAccount, updateStatusAccountById, dialog, setDialog,
        searchAccount,
    }
}

export default ViewModelAccount;