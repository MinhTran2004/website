import { Box } from "@mui/material";
import EnhancedTable from "../../component/EnhancedTable";

const ManagerCoupon = () => {
    const headCells = [
        {
          id: 'id',
          numeric: false,
          disablePadding: true,
          label: 'ID',
        },
        {
          id: 'UserName',
          numeric: true,
          disablePadding: false,
          label: 'UserName',
        },
        {
          id: 'Account',
          numeric: true,
          disablePadding: false,
          label: 'Account',
        },
        {
          id: 'Password',
          numeric: true,
          disablePadding: false,
          label: 'Password',
        },
        {
          id: 'Image',
          numeric: true,
          disablePadding: false,
          label: 'Image',
        },
        {
            id: 'Role',
            numeric: true,
            disablePadding: false,
            label: 'Password',
          },
          {
            id: 'Create At',
            numeric: true,
            disablePadding: false,
            label: 'Create At',
          },,
          {
            id: 'Status',
            numeric: true,
            disablePadding: false,
            label: 'Status',
          },
      ];
    return(
        <Box>
            <EnhancedTable title="Quản lý mã giảm giá" data={[]} dataTableHeader={headCells}/>
        </Box>
    )
}

export default ManagerCoupon;