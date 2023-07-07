import React from 'react';
import styles from './Date_Title.module.css';
import IconButton from '@mui/material/IconButton';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Date_Title_go = () => {
  return (
    <div>
      <div className={styles.today}>
        <div className={styles.heading}> 
          <h1>Today</h1>
        </div>
        <IconButton className={styles.icon}>  
          <CalendarTodayIcon fontSize="large" />
        </IconButton>  
      </div>

      <div className={styles.boxContainer}> {/* 클래스명 변경 */}
        <div className={styles.box}>
          <div className={styles.heading}> 
            <h2 className={styles.title}>총 주문수</h2>
          </div>
          <p className={styles.number}>500</p>
        </div>

        <div className={styles.box}>
          <div className={styles.heading}> 
            <h2 className={styles.title}>총 금액</h2>
          </div>
          <p className={styles.number}>500</p>
        </div>
      </div>
    </div>
  );
};

export default Date_Title_go;
