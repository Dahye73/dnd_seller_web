import { Outlet } from "react-router";
import Nav from "../components/MainRootLayout/nav/nav.layout";
import styles from "./MainRootLayout.module.css";

const MainRootLayout = () => {
  return (
<<<<<<< HEAD
    <main>
=======
    <main className={styles.main}>
      <Nav />
>>>>>>> e6b5a302b8ffa358f3a460f380da89b6644ea018
      <Outlet />
    </main>
  );
};

export default MainRootLayout;
