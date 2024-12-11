import { Box } from "@mui/material";
import EnhancedTable from "../../component/EnhancedTable";
import ViewModelOrderWaiting from "../../viewmodel/order-waiting.viewmodel";

const OrderWaiting = () => {
  const viewmodel = ViewModelOrderWaiting();

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
      label: 'ID khách hàng',
    },
    {
      id: 'Account',
      numeric: false,
      disablePadding: false,
      label: 'Số lượng',
    },
    {
      id: 'Password',
      numeric: false,
      disablePadding: false,
      label: 'Địa chỉ',
    },
    {
      id: 'Image',
      numeric: false,
      disablePadding: false,
      label: 'Số điện thoại',
    },
    {
      id: 'Role',
      numeric: false,
      disablePadding: false,
      label: 'Thời gian tạo',
    },
    {
      id: 'Price',
      numeric: false,
      disablePadding: false,
      label: 'Tổng tiền',
    }, ,
    {
      id: 'Status',
      numeric: false,
      disablePadding: false,
      label: 'Trạng thái',
    },
    // {
    //   id: 'Confirm',
    //   numeric: false,
    //   disablePadding: false,
    //   label: 'Xác nhận',
    // },

  ];
  return (
    <Box>
      <EnhancedTable title="Đơn hàng chờ xác nhận" data={viewmodel.dataOrder} dataTableHeader={headCells} />
    </Box>
  )
}

export default OrderWaiting;