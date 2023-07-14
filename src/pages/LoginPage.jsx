import { useEffect } from "react";
import LoginForm from "../components/LoginPage/loginForm/loginForm";
import SideImage from "../components/LoginPage/sideImage/sideImage";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../utilities/cookies";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const kakaoToken = new URL(document.location.toString()).searchParams.get(
      "code"
    );
    if (kakaoToken) {
      console.log(kakaoToken);
      // kakao login logic
    }
    if (getCookie("jwt")) {
      navigate("/main");
    }
  }, [navigate]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <LoginForm />
      </div>
      <div className={styles.image}>
        <SideImage />
      </div>
    </section>
  );
};

export default LoginPage;
