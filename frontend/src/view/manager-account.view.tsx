import { Box } from "@mui/material";
import EnhancedTable from "../component/EnhancedTable";
import ViewModelAccount from "../viewmodel/manager-account.viewmodel";
import TableAccount from "../component/TableAccount";

const ManagerAccount = () => {
    const viewmodel = ViewModelAccount();
    console.log(viewmodel.dataAccount);
    
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
        {
            id: 'Password',
            numeric: false,
            disablePadding: false,
            label: 'Password',
        },
        {
            id: 'Image',
            numeric: false,
            disablePadding: false,
            label: 'Image',
        },
        {
            id: 'Create At',
            numeric: false,
            disablePadding: false,
            label: 'Create At',
        }, ,
        {
            id: 'Status',
            numeric: false,
            disablePadding: false,
            label: 'Status',
        },
    ];

    return (
        <Box>
            <TableAccount title="Quản lý tài khoản" data={viewmodel.dataAccount} dataTableHeader={headCells} />
        </Box>
    )
}

export default ManagerAccount;