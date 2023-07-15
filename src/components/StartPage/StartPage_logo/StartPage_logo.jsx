import styles from "./StartPage_logo.module.scss";
import { useStore } from "../../../hooks/store_hooks";
import { CircularProgress } from "@mui/material";

const StartPageLogo = () => {
  const { data, error, isLoading } = useStore();

  if (error) {
    return <h1>에러가 발생했습니다. 다시 시도해수제요.</h1>;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  return <h1 className={styles.logo}>{data.storeName}</h1>;
};

export default StartPageLogo;
