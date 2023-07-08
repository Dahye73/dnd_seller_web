import { Outlet } from "react-router";
import Nav from "../components/MainRootLayout/nav/nav.layout";
import styles from "./MainRootLayout.module.css";
import { useEffect } from "react";
import { getCookie } from "../utilities/cookies";
import { useNavigate } from "react-router-dom";

const MainRootLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getCookie("jwt")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <main className={styles.main}>
      <Nav />
      <div className={styles.content}>
        <Outlet />
      </div>
    </main>
  );
};

export default MainRootLayout;
