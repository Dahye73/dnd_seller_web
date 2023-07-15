import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductPage from "../../../pages/ProductPage";
import PlusPopup from "../pluspopup/pluspopup.layout";
import styles from "./frame.module.css";

const Framelayout = () => {
  const [isPlusPopupOpen, setPlusPopupOpen] = useState(false);

  const openPlusPopup = () => {
    setPlusPopupOpen(true);
  }

  const closePlusPopup = () => {
    setPlusPopupOpen(false);
  }

  return (
    <div>
      <table>
        <thead>
          <tr className={styles.top}>
            <th>
              <strong>상품관리</strong>
              <p onClick={openPlusPopup}>추가하기</p>
            </th>
          </tr>
        </thead>
      </table>
      {isPlusPopupOpen ? <PlusPopup onClose={closePlusPopup} /> : null}
    </div>
  );
};

export default Framelayout;