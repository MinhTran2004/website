import { Box } from "@mui/material";
import ViewModelManageProduct from "../../viewmodel/manager-product.viewmodel";
import TableProduct from "../../component/table/TableProduct";

const ManagerProduct = () => {

  const ViewModel = ViewModelManageProduct();

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
      id: 'Role',
      numeric: false,
      disablePadding: false,
      label: 'Đã bán',
    },
    {
      id: 'Create At',
      numeric: false,
      disablePadding: false,
      label: 'Còn lại',
    },
    {
      id: 'Vote',
      numeric: false,
      disablePadding: false,
      label: 'Bình chọn',
    },
    {
      id: 'Describe',
      numeric: false,
      disablePadding: false,
      label: 'Mô tả',
    },
    {
      id: 'Status',
      numeric: false,
      disablePadding: false,
      label: 'Trạng thái',
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
      <TableProduct
        title="Quản lý sản phẩm"
        data={ViewModel.dataProduct}
        dataTableHeader={headCells}
        search={ViewModel.name}         // Thêm giá trị tìm kiếm
        setSearch={ViewModel.setName}   // Hàm cập nhật giá trị tìm kiếm
        onSearch={ViewModel.searchProduct} // Hàm tìm kiếm sản phẩm
        onDelete={ViewModel.deleteProduct}
      />
    </Box>
  )
}

export default ManagerProduct;