import { Link } from "react-router-dom";
import styles from "./item.module.css";
import {
  AccountTree,
  BarChart,
  DeliveryDining,
  Home,
  Info,
  SmartToy,
} from "@mui/icons-material";

const NAV_LIST = [
  { icon: <Home />, title: "메인화면", url: "" },
  { icon: <DeliveryDining />, title: "주문정보", url: "/order" },
  { icon: <AccountTree />, title: "상품관리", url: "/product" },
  { icon: <Info />, title: "가게정보", url: "/store" },
  { icon: <SmartToy />, title: "로봇관리", url: "robot" },
  { icon: <BarChart />, title: "통계", url: "statics" },
];

const Item = () => {
  return (
    <ul className={styles.container}>
      {NAV_LIST.map((item, index) => {
        return (
          <li
            className={styles.list}
            key={index}
          >
            <Link
              className={styles.link}
              to={``}
            >
              <div className={styles.icon}> {item.icon}</div>
              <p>{item.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Item;
