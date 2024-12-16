import * as React from 'react';
import { BarChart } from '@mui/x-charts';
import { Box } from '@mui/material';

export interface DataDate {
  year: number,
  month: number,
  revenue: number,
}

export interface Props {
  data: DataDate[];
}

const SimpleBarChart: React.FC<Props> = (props) => {
  console.log(props.data);

  const chartContainerRef = React.useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = React.useState<number>(0);
  const [containerHeight, setContainerHeight] = React.useState<number>(400); // Default height

  // Update the chart size when the container size changes
  React.useEffect(() => {
    const updateDimensions = () => {
      if (chartContainerRef.current) {
        setContainerWidth(chartContainerRef.current.offsetWidth);
        setContainerHeight(chartContainerRef.current.offsetHeight);
      }
    };

    // Initial size calculation
    updateDimensions();

    // Recalculate size when window resizes
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Nam thang
  const listDate: any[] = []
  props.data.map((item) => {
    listDate.push(item.month + "/" + item.year)
  })

  // doanh thu theo thang
  const listRevenue: any[] = [];
  props.data.map((item) => {
    listRevenue.push(item.revenue);
  })

  return (
    <Box sx={{
      width: '100%',
      '@media (min-width: 1100px)': {
        height: 800
      },
      '@media (max-width: 1100px)': {
        height: 500
      },
      '@media (max-width: 900px)': {
        height: 400
      },
      '@media (max-width: 600px)': {
        height: 300
      }

    }}>
      <BarChart
      sx={{padding: 1}}
        // width={containerWidth}    // Set width to 100% of parent
        // height={containerHeight}  // Set height to 100% of parent
        series={[
          { data: listRevenue, label: 'Doanh thu', id: 'pvId' },
          // { data: uData, label: 'uv', id: 'uvId' },
        ]}
        xAxis={[{ data: listDate, scaleType: 'band' }]}
      />
    </Box >
  );
}

export default SimpleBarChart;