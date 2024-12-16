import { Box } from "@mui/material";
import ItemDashboard from "../component/ItemDashboard";
import TableDashboard from "../component/table/TableDashboard";
import ViewModelManageProduct from "../viewmodel/manager-product.viewmodel";
import ViewmodelDashboard from "../viewmodel/dashboard.viewmodel";
import SimpleBarChart from "../component/SimpleBarChart";

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
{/* 
                <ItemDashboard
                    title="Tài khoản"
                    monney="20202020"
                    icon={require('../assets/images/icon_user.png')}
                /> */}
            </Box>


            <SimpleBarChart data={viewmodalDashBoard.dataDate}/>

            {/* <TableDashboard
                title="Sản phẩm được mua nhiều nhất"
                data={ViewModel.dataProduct}
                dataTableHeader={headCells}
                search={ViewModel.name}         // Thêm giá trị tìm kiếm
                setSearch={ViewModel.setName}   // Hàm cập nhật giá trị tìm kiếm
                onSearch={ViewModel.searchProduct} // Hàm tìm kiếm sản phẩm
                onDelete={ViewModel.deleteProduct} /> */}
        </Box>
    )
}