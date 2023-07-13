import styles from "./navTitle.module.css";
import { useStore } from "../../../../hooks/store_hooks";
import { CircularProgress } from "@mui/material";

const NavTitle = () => {
  const { data, error, isLoading } = useStore();

  if (error) {
    return <h1>에러가 발생했습니다. 다시시도해 주세요.</h1>;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  return <h2 className={styles.title}>{data.storeName}</h2>;
};

export default NavTitle;
