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
          //   numeric: false,
          //   disablePadding: false,
          //   label: 'Thời gian nhận',
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
    return(
        <Box>
            <TableOrderCompleted  title="Đơn hàng thành công" data={viewmodel.dataOrder} dataTableHeader={headCells}/>
        </Box>
    )
}

export default OrderSuccess;