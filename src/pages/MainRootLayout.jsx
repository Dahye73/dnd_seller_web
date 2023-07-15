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
  const { data, isLoading } = useStore();
  const dispatch = useDispatch();

  if (data) {
    dispatch(setStore(data));
  }

  useEffect(() => {
    if (!getCookie("jwt")) {
      navigate("/");
    }
  }, [navigate]);

  if (isLoading)
    return (
      <CircularProgress
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    );

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
