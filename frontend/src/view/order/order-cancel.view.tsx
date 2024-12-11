import { Box } from "@mui/material";
import EnhancedTable from "../../component/EnhancedTable";
import ViewModelOrderCancel from "../../viewmodel/order-cancel.viewmodel";

const OrderCancel = () => {
  const viewmodel = ViewModelOrderCancel();
  console.log(viewmodel.dataOrder);
  
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
    // {
    //   id: 'Create At',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Thời gian hủy',
    // },
    {
      id: 'Price',
      numeric: false,
      disablePadding: false,
      label: 'Tổng tiền',
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
      <EnhancedTable title="Đơn hàng đã hủy" data={viewmodel.dataOrder} dataTableHeader={headCells} />
    </Box>
  )
}

export default OrderCancel;