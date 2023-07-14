import Date_Title_go from "../components/Statics/Statics_Date/Date_Title";
import Sales_Graph_go from "../components/Statics/Statics_Graph/Sales_Graph";
import styles from "./StaticsPage.module.css";
import Menu_go from "../components/Statics/Statics_BestMenu/Menu";

const StaticsPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <Date_Title_go />
      </div>
      <div className={styles["container-row"]}>
        <Menu_go />
        <Sales_Graph_go />
      </div>
    </div>
  );
};

export default StaticsPage;
