import { Logout } from "@mui/icons-material";
import styles from "./logout.button.module.css";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../../../../utilities/cookies";

const LogoutButton = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    // 로그아웃 로직 구현해야함.
    removeCookie("jwt");
    navigate("/");
  };

  return (
    <button
      type="button"
      onClick={logoutHandler}
      className={styles.btn}
    >
      <Logout fontSize="medium" />
      <p>Logout</p>
    </button>
  );
};

export default LogoutButton;
