import Date_Title_go from "../components/Statics/Statics_Date/Date_Title";
import Sales_Graph_go from "../components/Statics/Statics_Graph/Sales_Graph";
import styles from "./StaticsPage.module.css";
const StaticsPage = () => {
  return (
    <div className={styles.container}>
    <div>
      <Date_Title_go />
    </div>
    <div>
      <Sales_Graph_go />
    </div>
    </div>
  );
};

export default StaticsPage;
  