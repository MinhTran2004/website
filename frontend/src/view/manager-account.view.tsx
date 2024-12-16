import { Box } from "@mui/material";
import ViewModelAccount from "../viewmodel/manager-account.viewmodel";
import TableAccount from "../component/table/TableAccount";

const ManagerAccount = () => {
    const viewmodel = ViewModelAccount();

    const headCells = [
        {
            id: 'id',
            numeric: false,
            disablePadding: true,
            label: 'ID',
        },
        {
            id: 'UserName',
            numeric: false,
            disablePadding: false,
            label: 'UserName',
        },
        {
            id: 'Account',
            numeric: false,
            disablePadding: false,
            label: 'Account',
        },
        // {
        //     id: 'Password',
        //     numeric: false,
        //     disablePadding: false,
        //     label: 'Password',
        // },
        // {
        //     id: 'Image',
        //     numeric: false,
        //     disablePadding: false,
        //     label: 'Image',
        // },
        {
            id: 'Create At',
            numeric: false,
            disablePadding: false,
            label: 'Ngày tạo',
        },
        {
            id: 'Status',
            numeric: false,
            disablePadding: false,
            label: 'Trạng thái',
        },
        {
            id: 'updateupdate',
            numeric: false,
            disablePadding: false,
            label: 'Thay đổi',
        }
    ];

    return (
        <Box>
            <TableAccount
                title="Quản lý tài khoản"
                data={viewmodel.dataAccount}
                dataTableHeader={headCells}
                onSearch={viewmodel.searchAccount}
                onDelete={viewmodel.deleteAccountById} />
        </Box>
    )
}

export default ManagerAccount;