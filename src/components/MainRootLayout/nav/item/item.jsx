import { NavLink } from "react-router-dom";
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
  { icon: <Home fontSize="large" />, title: "메인화면", url: "" },
  {
    icon: <DeliveryDining fontSize="large" />,
    title: "주문정보",
    url: "order",
  },
  { icon: <AccountTree fontSize="large" />, title: "상품관리", url: "product" },
  { icon: <Info fontSize="large" />, title: "가게정보", url: "store" },
  { icon: <SmartToy fontSize="large" />, title: "로봇관리", url: "robot" },
  { icon: <BarChart fontSize="large" />, title: "통계", url: "statics" },
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
            <NavLink
              end
              className={({ isActive }) => {
                return isActive
                  ? `${styles.link} ${styles.active}`
                  : `${styles.link}`;
              }}
              to={`${item.url}`}
            >
              <div className={styles.icon}> {item.icon}</div>
              <p>{item.title}</p>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Item;
