import styles from "./card_align_start.module.scss";

// eslint-disable-next-line react/prop-types
const CardAlignStart = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default CardAlignStart;
