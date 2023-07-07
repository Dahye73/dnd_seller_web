import { Logout } from "@mui/icons-material";
import styles from "./logout.button.module.css";

const LogoutButton = () => {
  return (
    <button className={styles.btn}>
      <Logout fontSize="large" />
      <p>Logout</p>
    </button>
  );
};

export default LogoutButton;
