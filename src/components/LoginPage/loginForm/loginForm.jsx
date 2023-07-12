import styles from "./loginForm.module.scss";
import google from "/images/google.png";
import kakao from "/images/kakao-talk.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginFetch } from "../../../utilities/login.fetch";
import { setCookie } from "../../../utilities/cookies";
import { Button, Dialog, DialogTitle } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";

const LoginForm = () => {
  const navigate = useNavigate();
  const [storeId, setStoreId] = useState("");
  const [storePassword, setStorePassword] = useState("");
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const googleLogin = useGoogleLogin({
    onSuccess: (res) => {
      console.log(res);
    },
  });

  const kakaoLogin = () => {
    const REST_API_KEY = "000a8ef9a33653f800585bde1c81e179";
    const REDIRECT_URI = "http://localhost:5173";
    const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoUrl;
  };

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
        <button
          type="button"
          onClick={() => googleLogin()}
          className={styles["button-with-image"]}
        >
          <img
            src={google}
            alt="google login"
          />
          continue with google
        </button>
        <button
          type="button"
          onClick={() => kakaoLogin()}
          className={styles["button-with-image"]}
        >
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
