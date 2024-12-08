import { useEffect, useState } from "react"
import { Account } from "../model/account.model"
import AccountService from "../service/account.service";
import ProductService from "../service/product.service";

const ViewModelAccount = () => {
    const [dataAccount, setDataAccount] = useState<Account[]>([]);

    const getAllAccount = async () => {
        const reponse = await AccountService.getAllAccount();
        setDataAccount(reponse);
    }
    const searchAccount = async (email:string) => {
        const response = await AccountService.searchAccount(email);
        setDataAccount(response);
    };
    const deleteAccountById = async (id: string) => {
        try {
            const success = await AccountService.deleteAccountById(id);
            if (success) {
                setDataAccount((prev) => prev.filter((account) => account._id !== id)); // Xóa khỏi danh sách hiện tại
            } else {
                alert("Không thể xóa tài khoản, thử lại sau!");
            }
        } catch (err) {
            console.error("Có lỗi khi xóa tài khoản:", err);
            alert("Có lỗi khi xóa tài khoản");
        }
    };
    useEffect(() => {
        getAllAccount()
    }, [])

    return{
        dataAccount,
        searchAccount,deleteAccountById,
    }
}

export default ViewModelAccount;