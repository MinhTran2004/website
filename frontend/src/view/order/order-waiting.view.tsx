import { Box } from "@mui/material";
import EnhancedTable from "../../component/EnhancedTable";

const OrderWaiting = () => {
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
          label: 'ID khách hàng',
        },
        {
          id: 'Account',
          numeric: true,
          disablePadding: false,
          label: 'Số lượng',
        },
        {
          id: 'Password',
          numeric: true,
          disablePadding: false,
          label: 'Địa chỉ',
        },
        {
          id: 'Image',
          numeric: true,
          disablePadding: false,
          label: 'Số điện thoại',
        },
        {
            id: 'Role',
            numeric: true,
            disablePadding: false,
            label: 'Thời gian tạo',
          },
          {
            id: 'Price',
            numeric: true,
            disablePadding: false,
            label: 'Tổng tiền',
          },,
          {
            id: 'Status',
            numeric: true,
            disablePadding: false,
            label: 'Trạng thái',
          },
          {
            id: 'Confirm',
            numeric: true,
            disablePadding: false,
            label: 'Xác nhận',
          },

      ];
    return(
        <Box>
            <EnhancedTable title="Đơn hàng chờ xác nhận" data={[]} dataTableHeader={headCells}/>
        </Box>
    )
}

export default OrderWaiting;