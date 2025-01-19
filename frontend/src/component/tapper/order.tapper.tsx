import * as React from 'react';
import Box from '@mui/material/Box';
import TableOrderWaiting from '../table/TableOrderWaiting';
import DetailOrderScreen from '../../view/detail/order.detail';
import { Order } from '../../model/order.model';
import TableAccount from '../table/TableAccount';
import TableProduct from '../table/TableProduct';
import TableOrderProgress from '../table/TableOrderProgress';
import TableOrderCancel from '../table/TableOrderCancel';
import TableOrderCompleted from '../table/TableOrderCompleted';
import TableCoupon from '../table/TableCoupon';

interface Props {
  title: string,
  headCells: { id: string; numeric: boolean; disablePadding: boolean; label: string; }[];
  viewmodel: any;
  typeTable: 'account' | 'product' | 'order-waiting' | 'order-progress' | 'order-cancel' | 'order-success' | 'coupon',
}

const TapperOrder: React.FC<Props> = (props) => {
  const [step, setStep] = React.useState(0);
  const [detailOrder, setDetailOrder] = React.useState<Order | undefined>(undefined);

  const SelectTable = () => {
    switch (props.typeTable) {
      case 'order-waiting': return (
        <TableOrderWaiting
          title={props.title}
          dataTableHeader={props.headCells}
          viewmodel={props.viewmodel}
          setSteps={setStep}
          setDataDetailOrder={setDetailOrder}
        />
      )

      case 'order-progress': return (
        <TableOrderProgress
          title={props.title}
          dataTableHeader={props.headCells}
          viewmodel={props.viewmodel}
          setSteps={setStep}
          setDataDetailOrder={setDetailOrder}
        />
      )

      case 'order-success': return (
        <TableOrderCompleted
          title={props.title}
          dataTableHeader={props.headCells}
          viewmodel={props.viewmodel}
          setSteps={setStep}
          setDataDetailOrder={setDetailOrder}
        />
      )

      case 'order-cancel': return (
        <TableOrderCancel
          title={props.title}
          dataTableHeader={props.headCells}
          viewmodel={props.viewmodel}
          setSteps={setStep}
          setDataDetailOrder={setDetailOrder}
        />
      )
      default: return <Box />
    }
  }

  const StepsScreen = React.memo(() => {
    switch (step) {
      case 0: return (<SelectTable />)
      case 1: return (
        <DetailOrderScreen
          dataDetailOrder={detailOrder}
          setSteps={setStep}
        />
      )
      default: return (<SelectTable />)
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