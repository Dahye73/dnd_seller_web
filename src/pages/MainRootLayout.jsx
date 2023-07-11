import { Outlet } from "react-router";
import Nav from "../components/MainRootLayout/nav/nav.layout";
import styles from "./MainRootLayout.module.css";
import { useEffect } from "react";
import { getCookie } from "../utilities/cookies";
import { useNavigate } from "react-router-dom";
import { useStore } from "../hooks/store_hooks";
import { CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { setStore } from "../store/storeSlice";

const MainRootLayout = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useStore();
  const dispatch = useDispatch();

  if (data) {
    dispatch(setStore(data));
  }

  useEffect(() => {
    if (!getCookie("jwt")) {
      navigate("/");
    }
  }, [navigate]);

  if (error) return <h1>에러가 발생했습니다. 다시 시도해주세요.</h1>;

  if (isLoading) return <CircularProgress />;

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
