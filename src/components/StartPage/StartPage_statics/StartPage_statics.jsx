import { KeyboardArrowRight } from "@mui/icons-material";
import styles from "./StartPage_statics.module.scss";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const StartPageStatics = ({ title, amount, description }) => {
  const navigate = useNavigate();
  return (
    <section className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.amount}>{amount.toLocaleString()} 원</div>
      <div className={styles.description}>{description}</div>
      <button
        type="button"
        className={styles.check}
        onClick={() => navigate("/main/statics")}
      >
        확인하러가기 <KeyboardArrowRight fontSize="small" />
      </button>
    </section>
  );
};

export default StartPageStatics;
