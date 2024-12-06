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
          label: 'Tên mã',
        },
        {
          id: 'Account',
          numeric: true,
          disablePadding: false,
          label: 'Thể loại',
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
          label: 'Số lượng',
        },
        {
            id: 'Role',
            numeric: true,
            disablePadding: false,
            label: 'Điều kiện đơn hàng',
          },
          {
            id: 'Create At',
            numeric: true,
            disablePadding: false,
            label: 'Ngày bắt đầu',
          },
          {
            id: 'End Date',
            numeric: true,
            disablePadding: false,
            label: 'Ngày kết thúc',
          },
          {
            id: 'Status',
            numeric: true,
            disablePadding: false,
            label: 'Trạng thái',
          },
      ];
    return(
        <Box>
            <EnhancedTable title="Quản lý mã giảm giá" data={[]} dataTableHeader={headCells}/>
        </Box>
    )
}

export default ManagerCoupon;