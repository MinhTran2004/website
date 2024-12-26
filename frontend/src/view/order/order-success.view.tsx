import { Box } from "@mui/material";
import ViewModelOrderSuccess from "../../viewmodel/order-success.viewmodel";
import TableOrderCompleted from "../../component/table/TableOrderCompleted";

const OrderSuccess = () => {
  const viewmodel = ViewModelOrderSuccess();

  const headCells = [
    {
      id: 'id',
      numeric: false,
      disablePadding: false,
      label: 'ID',
    },
    {
      id: 'UserName',
      numeric: false,
      disablePadding: false,
      label: 'Tên khách hàng',
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
    },
    {
      id: 'PaymentMethod',
      numeric: false,
      disablePadding: false,
      label: 'Phương thức thanh toán',
    },
    {
      id: 'Status',
      numeric: false,
      disablePadding: false,
      label: 'Trạng thái',
    },
  ];
  return (
    <Box>
      <TableOrderCompleted title="Đơn hàng thành công" data={viewmodel.dataOrder} dataTableHeader={headCells} />
    </Box>
  )
}

export default OrderSuccess;