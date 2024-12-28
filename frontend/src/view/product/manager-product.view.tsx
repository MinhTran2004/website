import { Box } from "@mui/material";
import ViewModelManageProduct from "../../viewmodel/manager-product.viewmodel";
import TableProduct from "../../component/table/TableProduct";
import TapperOrder from "../../component/tapper/order.tapper";

const ManagerProduct = () => {

  const viewmodel = ViewModelManageProduct();

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
      label: 'Tên sản phẩm',
    },
    {
      id: 'Account',
      numeric: false,
      disablePadding: false,
      label: 'Giá sản phẩm',
    },
    {
      id: 'Password',
      numeric: false,
      disablePadding: false,
      label: 'Thể loại',
    },
    {
      id: 'Image',
      numeric: false,
      disablePadding: false,
      label: 'Ảnh',
    },
    {
      id: 'Create At',
      numeric: false,
      disablePadding: false,
      label: 'Đã bán',
    },
    {
      id: "action",
      numeric: false,
      disablePadding: false,
      label: "Thay đổi",
    },
  ];

  return (
    <Box>
      <TapperOrder
        title="Quản lý sản phẩm"
        headCells={headCells}
        typeTable="product"
        onSearch={viewmodel.searchProduct}
        viewmodel={viewmodel}
      />
    </Box>
  )
}

export default ManagerProduct;