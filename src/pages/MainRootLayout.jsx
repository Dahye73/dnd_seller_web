import { Outlet } from "react-router";
import Nav from "../components/MainRootLayout/nav/nav.layout";
import styles from "./MainRootLayout.module.css";

const MainRootLayout = () => {
  return (
    <main className={styles.main}>
      <Nav />
      <Outlet />
    </main>
  );
};

export default MainRootLayout;
