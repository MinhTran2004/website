import { Box } from "@mui/material";
import TableCoupon from "../../component/table/TableCoupon";
import ViewModelManageCoupon from "../../viewmodel/manager-coupon.viewmodel";
import TapperOrder from "../../component/tapper/order.tapper";

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
      id: 'quantity',
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
    {
      id: 'Update',
      numeric: false,
      disablePadding: false,
      label: 'Thay đổi',
    },
  ];
  return (
    <Box>
      <TapperOrder
        title="Quản lý mã giảm giá"
        headCells={headCells}
        typeTable="coupon"
        viewmodel={ViewModel} />
    </Box>
  )
}

export default ManagerCoupon;