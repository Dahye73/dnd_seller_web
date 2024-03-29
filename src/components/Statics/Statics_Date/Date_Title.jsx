import { useState } from "react";
import styles from "./Date_Title.module.css";
import IconButton from "@mui/material/IconButton";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Date_Title_go = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const pad = (number) => {
    return String(number).padStart(2, "0");
  };

  const formatDate = (date) => {
    if (isToday(date)) {
      return "Today";
    } else {
      return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
        date.getDate()
      )}`;
    }
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const minDate = new Date(2023, 0, 1); // 2023년 1월 1일
  const maxDate = new Date(); // 현재 날짜

  return (
    <div className={styles.container}>
      <div className={styles.today}>
        <div className={styles.heading}>
          <h2>{formatDate(selectedDate)}</h2>
        </div>
        <div className={styles.datePickerContainer}>
          <IconButton
            className={styles.icon}
            onClick={handleOpen}
          >
            <CalendarTodayIcon fontSize="large" />
          </IconButton>
          {isOpen && (
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              inline
              shouldCloseOnSelect={false} // 아이콘 노 클릭
              minDate={minDate}
              maxDate={maxDate}
            />
          )}
        </div>
      </div>

      <div className={styles.boxContainer}>
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
