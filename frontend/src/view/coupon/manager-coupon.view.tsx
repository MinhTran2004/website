import { Box } from "@mui/material";
import TableCoupon from "../../component/TableCoupon";
import ViewModelManageCoupon from "../../viewmodel/manager-coupon.viewmodel";

const ManagerCoupon = () => {
  const ViewModel = ViewModelManageCoupon();
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
          label: 'Tên mã',
        },
        {
          id: 'Account',
          numeric: false,
          disablePadding: false,
          label: 'Thể loại',
        },
        {
          id: 'Image',
          numeric: false,
          disablePadding: false,
          label: 'Số lượng',
        },
        {
            id: 'Role',
            numeric: false,
            disablePadding: false,
            label: 'Điều kiện đơn hàng',
          },
          {
            id: 'Create At',
            numeric: false,
            disablePadding: false,
            label: 'Ngày bắt đầu',
          },
          {
            id: 'End Date',
            numeric: false,
            disablePadding: false,
            label: 'Ngày kết thúc',
          },
          {
            id: 'Status',
            numeric: false,
            disablePadding: false,
            label: 'Trạng thái',
          },
      ];
    return(
        <Box>
            <TableCoupon title="Quản lý mã giảm giá" data={ViewModel.dataCoupon} dataTableHeader={headCells}  
             onDelete={ViewModel.deleteCouponById}/>
        </Box>
    )
}

export default ManagerCoupon;