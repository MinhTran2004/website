import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { Box } from '@mui/material';
import ManagerAccount from './manager-account.view';
import CreateProduct from './product/create-product.view';
import ManagerProduct from './product/manager-product.view';
import OrderWaiting from './order/order-waiting.view';
import OrderSuccess from './order/order-success.view';
import OrderCancel from './order/order-cancel.view';
import CreateCoupon from './coupon/create-coupon.view';
import ManagerCoupon from './coupon/manager-coupon.view';
import DashboardScreen from './dashboard.view';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'account',
    title: 'Tài khoản người dùng',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Sản phẩm',
  },
  {
    segment: 'create-product',
    title: 'Tạo sản phẩm',
    icon: <BarChartIcon />,
  },
  {
    segment: 'manager-product',
    title: 'Quản lý sản phẩm',
    icon: <LayersIcon />,
  },
  {
    kind: 'header',
    title: 'Đơn hàng',
  },
  {
    segment: 'order-waiting',
    title: 'Chờ xác nhận',
    icon: <BarChartIcon />,
  },
  {
    segment: 'order-success',
    title: 'Thành công',
    icon: <LayersIcon />,
  },
  {
    segment: 'order-cancel',
    title: 'Đã hủy',
    icon: <LayersIcon />,
  },
  {
    kind: 'header',
    title: 'Mã giảm giá',
  },
  {
    segment: 'create-coupon',
    title: 'Tạo mã giảm giá',
    icon: <BarChartIcon />,
  },
  {
    segment: 'manager-coupon',
    title: 'Quản lý mã giảm giá',
    icon: <LayersIcon />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function Main(props: any) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      branding={{
        logo: <img src={require('../assets/images/image.png')}/>,
        title: 'OrderFood'
      }}
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout sx={{ padding: '10px' }}>

        <Box sx={{ padding: '10px' }}>
          {router.pathname === '/dashboard' && <DashboardScreen />}
          {router.pathname === '/account' && <ManagerAccount />}
          {router.pathname === '/create-product' && <CreateProduct />}
          {router.pathname === '/manager-product' && <ManagerProduct />}
          {router.pathname === '/order-waiting' && <OrderWaiting />}
          {router.pathname === '/order-success' && <OrderSuccess />}
          {router.pathname === '/order-cancel' && <OrderCancel />}
          {router.pathname === '/create-coupon' && <CreateCoupon />}
          {router.pathname === '/manager-coupon' && <ManagerCoupon />}
        </Box>

      </DashboardLayout>
    </AppProvider>
  );
}