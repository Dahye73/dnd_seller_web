import styles from "./Sales_Graph.module.css";
import Box from "@mui/material/Box";

const Sales_Graph_go = () => {
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
          <h3 className={styles.graphPlaceholder}>
            이곳에 그래프를 넣을 수 있습니다.
          </h3>
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
          <h3 className={styles.graphPlaceholder}>
            이곳에 그래프를 넣을 수 있습니다.
          </h3>
        </Box>
      </div>
    </div>
  );
};

export default Sales_Graph_go;
