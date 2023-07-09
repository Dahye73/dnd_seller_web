import { useEffect, useState } from "react";
import Card from "../../../UI/card";
import styles from "./StartPage_date.module.scss";

const DATE = ["일", "월", "화", "수", "목", "금", "토"];

const StartPageDate = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [date, setDate] = useState(new Date().getDate());
  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [weekItem, setWeekItem] = useState(DATE[new Date().getDay()]);

  useEffect(() => {
    const timer = setInterval(() => {
      setYear(new Date().getFullYear());
      setMonth(new Date().getMonth() + 1);
      setDate(new Date().getDate());
      setHour(new Date().getHours());
      setMinute(new Date().getMinutes());
      setWeekItem(DATE[new Date().getDay()]);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <Card>
          <div>
            {year}년 {month}월 {date}일 {weekItem}요일
          </div>
          <div>
            현재시각: {hour}시 {minute}분
          </div>
        </Card>
      </div>
      <button className={styles.btn}>시작하기</button>
    </div>
  );
};

export default StartPageDate;
