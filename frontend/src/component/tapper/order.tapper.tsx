import * as React from 'react';
import Box from '@mui/material/Box';
import TableOrderWaiting from '../table/TableOrderWaiting';
import DetailOrderScreen from '../../view/detail/order.detail';
import { Order } from '../../model/order.model';

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
    label: 'Phương thức',
  },
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

interface Props {
  activeStep: number,
  setActiveStep: (step: number) => void;
  viewmodel: any;
}

const TapperOrder: React.FC<Props> = (props) => {
  const [step, setStep] = React.useState(0);
  const [detailOrder, setDetailOrder] = React.useState<Order | undefined>(undefined);

  const StepsScreen = React.memo(() => {
    switch (step) {
      case 0: return (
        <TableOrderWaiting
          title="Đơn hàng chờ xác nhận"
          data={props.viewmodel.dataOrder}
          dataTableHeader={headCells}
          viewmodel={props.viewmodel}
          setSteps={setStep}
          setDataDetailOrder={setDetailOrder}
        />
      )
      case 1: return (
        <DetailOrderScreen
          dataDetailOrder={detailOrder}
          setSteps={setStep}
        />
      )
      default: return (
        <TableOrderWaiting
          title="Đơn hàng chờ xác nhận"
          data={props.viewmodel.dataOrder}
          dataTableHeader={headCells}
          viewmodel={props.viewmodel}
          setSteps={setStep}
          setDataDetailOrder={setDetailOrder}
        />
      )
    }
  })


  return (
    <Box sx={{
      height: '100%',
    }}>
      <StepsScreen />
    </Box>
  );
}

export default TapperOrder;