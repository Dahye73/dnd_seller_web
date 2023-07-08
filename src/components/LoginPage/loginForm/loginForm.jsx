import styles from "./loginForm.module.scss";
import google from "../../../../public/images/google.png";
import kakao from "../../../../public/images/kakao-talk.png";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    // 로그인 로직 구현해야함.
    e.preventDefault();
    navigate("/main");
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className={styles.form}
    >
      <label>Login</label>
      <input
        type="text"
        placeholder="id"
      ></input>
      <input
        type="password"
        placeholder="password"
        className={styles["input-no-margin"]}
      ></input>
      <p className={styles["text-right-align"]}>Forgot Password?</p>
      <div className={styles.line}>
        <hr />
        <p>OR</p>
        <hr />
      </div>
      <button className={styles["button-with-image"]}>
        <img
          src={google}
          alt="google login"
        />
        continue with google
      </button>
      <button className={styles["button-with-image"]}>
        <img
          src={kakao}
          alt="kakao login"
        />
        continue with kakao
      </button>
      <button
        className={styles.loginBtn}
        type="submit"
      >
        login
      </button>
    </form>
  );
};

export default LoginForm;
