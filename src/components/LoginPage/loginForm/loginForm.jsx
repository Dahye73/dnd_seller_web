import styles from "./loginForm.module.scss";
import google from "../../../../public/images/google.png";
import kakao from "../../../../public/images/kakao-talk.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginFetch } from "../../../utilities/login.fetch";
import { setCookie } from "../../../utilities/cookies";
import { Button, Dialog, DialogTitle } from "@mui/material";

const LoginForm = () => {
  const navigate = useNavigate();
  const [storeId, setStoreId] = useState("");
  const [storePassword, setStorePassword] = useState("");
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const storeIdChangeHandler = (e) => {
    setStoreId(e.target.value);
  };

  const storePasswordChangeHandler = (e) => {
    setStorePassword(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    // 로그인 로직 구현해야함.
    e.preventDefault();

    try {
      const result = await loginFetch(storeId, storePassword);

      console.log(result);

      const accessToken = result["access_token"];

      setCookie("jwt", accessToken, {
        path: "/",
        maxAge: 3600,
        sameSite: "strict",
      });

      navigate("/main");
    } catch (error) {
      // showing error message using dialog
      setOpenErrorModal(true);
      setErrorMessage(
        error?.message || error?.detail || "로그인에 실패했습니다."
      );
    }
  };

  return (
    <>
      <Dialog
        open={openErrorModal}
        onClose={() => setOpenErrorModal(false)}
      >
        <DialogTitle>{errorMessage}</DialogTitle>
        <Button onClick={() => setOpenErrorModal(false)}>확인</Button>
      </Dialog>
      <form
        onSubmit={onSubmitHandler}
        className={styles.form}
      >
        <label>Login</label>
        <input
          value={storeId}
          onChange={storeIdChangeHandler}
          type="text"
          placeholder="id"
        ></input>
        <input
          value={storePassword}
          onChange={storePasswordChangeHandler}
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
    </>
  );
};

export default LoginForm;
