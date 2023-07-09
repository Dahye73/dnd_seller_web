import { Link } from "react-router-dom";
import ProductPage from "../../../pages/ProductPage";
import Style from "./frame.module.css";

const Framelayout = () => {
  return (
    <div>
      <table>
        <thead>
          <tr className={Style.top}>
            <th>
              <strong>상품관리</strong>
              <p>추가하기</p>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Framelayout;