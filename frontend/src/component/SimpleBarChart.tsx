import * as React from 'react';
import { BarChart } from '@mui/x-charts';
import { Box } from '@mui/material';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function SimpleBarChart() {

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
        // width={containerWidth}    // Set width to 100% of parent
        // height={containerHeight}  // Set height to 100% of parent
        series={[
          { data: pData, label: 'Doanh thu', id: 'pvId' },
          // { data: uData, label: 'uv', id: 'uvId' },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
      />
    </Box >
  );
}