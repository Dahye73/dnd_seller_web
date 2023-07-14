import { useEffect, useState } from "react";
import Card from "../../../UI/card";
import styles from "./StartPage_date.module.scss";
import { useStore } from "../../../hooks/store_hooks";
import { CircularProgress } from "@mui/material";
import {
  storeEndFetcher,
  storeStartFetcher,
} from "../../../utilities/login.fetch";

const DATE = ["일", "월", "화", "수", "목", "금", "토"];

const StartPageDate = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [date, setDate] = useState(new Date().getDate());
  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [weekItem, setWeekItem] = useState(DATE[new Date().getDay()]);
  const [currentMili, setCurrentMili] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setYear(new Date().getFullYear());
      setMonth(new Date().getMonth() + 1);
      setDate(new Date().getDate());
      setHour(new Date().getHours());
      setMinute(new Date().getMinutes());
      setWeekItem(DATE[new Date().getDay()]);
      setCurrentMili(Math.floor(Date.now() / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { data, error, isLoading, mutate } = useStore();

  if (error) {
    return <h1>에러가 발생했습니다. 다시 시도해 주세요.</h1>;
  }

  if (isLoading) {
    return (
      <div className={styles.container}>
        <CircularProgress />
      </div>
    );
  }

  const onStartHandler = async () => {
    // 시작
    const startTime = Math.floor(Date.now() / 1000);
    console.log(startTime);
    storeStartFetcher(startTime);
    mutate({
      ...data,
      status: true,
      startTime: startTime,
    });
  };

  const onEndHandler = async () => {
    // 종료
    storeEndFetcher();
    mutate({
      ...data,
      status: false,
    });
  };

  const startBtn = (
    <button
      onClick={onStartHandler}
      className={styles.btn}
    >
      시작하기
    </button>
  );

  const endBtn = (
    <button
      onClick={onEndHandler}
      className={`${styles.btn} ${styles["btn_red"]}`}
    >
      종료하기
    </button>
  );

  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <Card>
          <div>
            {year}년 {month}월 {date}일 {weekItem}요일
          </div>

          {data?.status ? (
            <div>
              시작한지 {Math.floor((currentMili - data.startTime) / 3600)}시간
              {Math.floor(((currentMili - data.startTime) % 3600) / 60)}분
            </div>
          ) : (
            <div>
              현재시각: {hour}시 {minute}분
            </div>
          )}
        </Card>
      </div>
      {data?.status ? endBtn : startBtn}
    </div>
  );
};

export default StartPageDate;
