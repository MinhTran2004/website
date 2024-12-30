import { Box } from "@mui/material";
import ViewModelAccount from "../viewmodel/manager-account.viewmodel";
import TapperOrder from "../component/tapper/order.tapper";
import TableAccount from "../component/table/TableAccount";

const ManagerAccount = () => {
    const viewmodel = ViewModelAccount();

    const headCells = [
        {
            id: 'ID',
            numeric: false,
            disablePadding: false,
            label: 'ID',
        },
        {
            id: 'Account',
            numeric: false,
            disablePadding: false,
            label: 'Account',
        },
        {
            id: 'Create At',
            numeric: false,
            disablePadding: false,
            label: 'Ngày tạo',
        },
        {
            id: 'role',
            numeric: false,
            disablePadding: false,
            label: 'Chức vụ',
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
                dataTableHeader={headCells}
                viewmodel={viewmodel}
            />
        </Box>
    )
}

export default ManagerAccount;