import { Box } from "@mui/material";
import EnhancedTable from "../../component/EnhancedTable";

const ManagerProduct = () => {
    const headCells = [
        {
          id: 'id',
          numeric: false,
          disablePadding: true,
          label: 'ID',
        },
        {
          id: 'UserName',
          numeric: true,
          disablePadding: false,
          label: 'Tên sản phẩm',
        },
        {
          id: 'Account',
          numeric: true,
          disablePadding: false,
          label: 'Giá sản phẩm',
        },
        {
          id: 'Password',
          numeric: true,
          disablePadding: false,
          label: 'Thể loại',
        },
        {
          id: 'Image',
          numeric: true,
          disablePadding: false,
          label: 'Ảnh',
        },
        {
            id: 'Role',
            numeric: true,
            disablePadding: false,
            label: 'Đã bán',
          },
          {
            id: 'Create At',
            numeric: true,
            disablePadding: false,
            label: 'Còn lại',
          },
          {
            id: 'Vote',
            numeric: true,
            disablePadding: false,
            label: 'Bình chọn',
          },
          {
            id: 'Describe',
            numeric: true,
            disablePadding: false,
            label: 'Mô tả',
          },
          {
            id: 'Status',
            numeric: true,
            disablePadding: false,
            label: 'Trạng thái',
          },
      ];
    return(
        <Box>
            <EnhancedTable title="Quản lý sản phẩm" data={[]} dataTableHeader={headCells}/>
        </Box>
    )
}

export default ManagerProduct;