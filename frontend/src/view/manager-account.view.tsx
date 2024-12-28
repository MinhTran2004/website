import { Box } from "@mui/material";
import ViewModelAccount from "../viewmodel/manager-account.viewmodel";
import TapperOrder from "../component/tapper/order.tapper";

const ManagerAccount = () => {
    const viewmodel = ViewModelAccount();

    const headCells = [
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
            <TapperOrder
                title="Quản lý tài khoản"
                headCells={headCells}
                typeTable="account"
                viewmodel={viewmodel}
            />
        </Box>
    )
}

export default ManagerAccount;