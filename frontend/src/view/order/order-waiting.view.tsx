import { Box } from "@mui/material";
import ViewModelOrderWaiting from "../../viewmodel/order-waiting.viewmodel";
import TapperOrder from "../../component/tapper/order.tapper";

const OrderWaiting = () => {
  const viewmodel = ViewModelOrderWaiting();

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
    {
      id: 'Confirm',
      numeric: false,
      disablePadding: false,
      label: 'Thay đổi',
    },
  ];

  return (
    <Box sx={{ height: '100%', }}>
      <TapperOrder
        activeStep={viewmodel.activeStep}
        setActiveStep={viewmodel.setActiveStep}
        viewmodel={viewmodel}
      />
    </Box>
  )
}

export default OrderWaiting;