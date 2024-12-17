import { Box } from "@mui/material";
import ItemDashboard from "../component/ItemDashboard";
import ViewModelManageProduct from "../viewmodel/manager-product.viewmodel";
import ViewmodelDashboard from "../viewmodel/dashboard.viewmodel";
import SimpleBarChart from "../component/SimpleBarChart";
import TableDashboard from "../component/table/TableDashboard";

export default function DashboardScreen() {
    const ViewModelProduct = ViewModelManageProduct();
    const viewmodalDashBoard = ViewmodelDashboard();

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
            id: 'Status',
            numeric: false,
            disablePadding: false,
            label: 'Trạng thái',
        }
    ];

    return (
        <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
        }}>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'auto auto',
                gap: '20px',
                '@media (max-width: 900px)': {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                }
            }}>
                <ItemDashboard
                    title="Doanh thu của tháng"
                    monney={viewmodalDashBoard?.dataDate[11]?.revenue?.toString()}
                    icon={require('../assets/images/icon_revenue.png')}
                />

                <ItemDashboard
                    title="Đơn hàng của tháng"
                    monney={viewmodalDashBoard?.dataDate[11]?.order?.toString()}
                    icon={require('../assets/images/icon_product.png')}
                />
            </Box>

            <SimpleBarChart data={viewmodalDashBoard.dataDate} />

            {/* <TableDashboard
                title="Sản phẩm được mua nhiều nhất"
                data={ViewModelProduct.dataProduct}
                dataTableHeader={headCells}
                search={ViewModelProduct.nameSearch}         // Thêm giá trị tìm kiếm
                setSearch={ViewModelProduct.setNameSearch}   // Hàm cập nhật giá trị tìm kiếm
                onSearch={ViewModelProduct.searchProduct} // Hàm tìm kiếm sản phẩm
                onDelete={ViewModelProduct.deleteProduct} /> */}
        </Box>
    )
}