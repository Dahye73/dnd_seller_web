import { Outlet } from "react-router";
import Nav from "../components/MainRootLayout/nav/nav.layout";
import styles from "./MainRootLayout.module.css";
import MainRootFooter from "../components/MainRootLayout/footer/MaintRootFooter";

const MainRootLayout = () => {
  return (
    <main className={styles.main}>
      <Nav />
      <div className={styles.container}>
        <Outlet />
        <MainRootFooter />
      </div>
    </main>
  );
};

export default MainRootLayout;
