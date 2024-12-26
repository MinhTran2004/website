import { Box } from "@mui/material";
import ViewModelOrderCancel from "../../viewmodel/order-cancel.viewmodel";
import TableOrderCancel from "../../component/table/TableOrderCancel";

const OrderCancel = () => {
  const viewmodel = ViewModelOrderCancel();
  console.log(viewmodel.dataOrder);

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
      <TableOrderCancel
        title="Đơn hàng đã hủy"
        data={viewmodel.dataOrder}
        dataTableHeader={headCells}
      />
    </Box>
  )
}

export default OrderCancel;