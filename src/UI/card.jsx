import styles from "./card.module.scss";

// eslint-disable-next-line react/prop-types
const Card = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
