import React, { useState} from 'react';
import styles from './Sales_Graph.module.css';
import Box from '@mui/material/Box';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const fullData = [
  { "year": 2016, "sales": 2000 },
  { "year": 2017, "sales": 1000 },
  { "year": 2018, "sales": 4000 },
  { "year": 2019, "sales": 6000 },
  { "year": 2020, "sales": 3000 },
  { "year": 2021, "sales": 4000 },
  { "year": 2022, "sales": 5000 },
]

const orderData = [
  { "menu": "menu1", "order": 200,},
  { "menu": "menu2", "order": 300,},
  { "menu": "menu3", "order": 500,},
  { "menu": "menu4", "order": 230,},
  { "menu": "menu5", "order": 250,},
  { "menu": "menu6", "order": 233,},
  { "menu": "menu7", "order": 300,},
]

const transformedData = [
  {
    "id": "sales",
    "color": "hsl(226, 70%, 50%)",
    "data": fullData.map(item => ({ "x": item.year, "y": item.sales }))
  }
];

const Sales_Graph_go = () => {

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  const [startOrder, setStartOrder] = useState(0);
  const [endOrder, setEndOrder] = useState(5);

  //const fullData_go = fullData.slice(startFull, endFull);
  const orderData_go = orderData.slice(startOrder, endOrder);

  const dataSlice = transformedData.map(series => ({
    ...series,
    data: series.data.slice(start, end),
  }));

  const handleNext = () => {
    if (end < fullData.length) {
      setStart(start + 1);
      setEnd(end + 1);
    }
  };

  const handlePrev = () => {
    if (start > 0) {
      setStart(start - 1);
      setEnd(end - 1);
    }
  };

  const orderhandleNext = () => {
    if (endOrder < orderData.length) {
      setStartOrder(startOrder + 1);
      setEndOrder(endOrder + 1);
    }
  };

  const orderhandlePrev = () => {
    if (startOrder > 0) {
      setStartOrder(startOrder - 1);
      setEndOrder(endOrder - 1);
    }
  };

  return (

    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>매출 그래프</h2>
        <select className={styles.selectBox}>
          <option value="year">Year</option>
          <option value="month">Month</option>
          <option value="date">Date</option>
        </select>
      </div>

      <div className={styles.graphContainer}>
        <Box className={styles.box}>
        <button className={styles.Arrow} onClick={handlePrev}> <ArrowBackIosIcon fontSize="large" /> </button>
        <ResponsiveLine
          data={dataSlice}
          margin={{ top: 50, right: 40, bottom: 50, left: 80 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Year',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Sales',
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}

        />
        <button className={styles.Arrow} onClick={handleNext}> <ArrowForwardIosIcon fontSize="large" /> </button>
        </Box>
      </div>

      <div className={styles.titleContainer}>
        <h2 className={styles.title}>주문량 그래프</h2>
        <select className={styles.selectBox}>
          <option value="주문수">주문수</option>
          <option value="찜수">찜수</option>
        </select>
      </div>

      <div className={styles.graphContainer}>
        <Box className={styles.box}>
        <button className={styles.Arrow} onClick={orderhandlePrev}> <ArrowBackIosIcon fontSize="large" /> </button>
          <ResponsiveBar
            data={orderData_go}
            keys={['order']}
            indexBy="menu"
            margin={{ top: 50, right: 40, bottom: 50, left: 80 }}
            padding={0.3}
            colors={{ scheme: 'nivo' }}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'menu',
              legendPosition: 'middle',
              legendOffset: 35
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'order',
              legendPosition: 'middle',
              legendOffset: -60
            }}
          />
          <button className={styles.Arrow} onClick={orderhandleNext}> <ArrowForwardIosIcon fontSize="large" /> </button>
        </Box>
      </div>
    </div>
  );
};

export default Sales_Graph_go;
