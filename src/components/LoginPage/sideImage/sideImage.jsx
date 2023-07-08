import image from "../../../../public/images/login.png";
import styles from "./sideImage.module.scss";

const SideImage = () => {
  return (
    <img
      className={styles.image}
      src={image}
      alt="decoration image"
    />
  );
};

export default SideImage;
