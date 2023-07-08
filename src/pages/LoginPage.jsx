import LoginForm from "../components/LoginPage/loginForm/loginForm";
import SideImage from "../components/LoginPage/sideImage/sideImage";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
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
