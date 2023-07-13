import { KeyboardArrowRight } from "@mui/icons-material";
import styles from "./StartPage_statics.module.scss";

// eslint-disable-next-line react/prop-types
const StartPageStatics = ({ title, amount, description }) => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.amount}>{amount.toLocaleString()} 원</div>
      <div className={styles.description}>{description}</div>
      <button
        type="button"
        className={styles.check}
      >
        확인하러가기 <KeyboardArrowRight fontSize="small" />
      </button>
    </section>
  );
};

export default StartPageStatics;
