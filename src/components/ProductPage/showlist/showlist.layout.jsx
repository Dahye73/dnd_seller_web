import { Link } from "react-router-dom";
import React, { useState } from 'react';
import ProductPage from "../../../pages/ProductPage";
import EditPopup from "../editpopup/editpopup.layout";
import styles from "./showlist.module.css";
import PlusPopup from "../editpopup/editpopup.layout";
import DeletePopup from "../deletepopup/deletepopup.layout";

const Showlist = () => {
  const [isPlusPopupOpen, setIsPlusPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

  const openPlusPopup = () => {
    setIsPlusPopupOpen(true);
  };

  const openEditPopup = () => {
    setIsEditPopupOpen(true);
  };

  const openDeletePopup = () => {
    setIsDeletePopupOpen(true);
  };

  return (
    <div className={`${styles.productList} ${styles.mainFrame}`}>
      <table>
        <thead>
          <tr>
            <th className={styles.imageRow}>
              <Link to='#'>
                <img src="../sample1.jpg" alt="상품보기" />
              </Link>
            </th>
            <th className={styles.infoRow}>
              <div>
                <strong><a href="#">삼겹살</a></strong>
                <p>상품 설명</p>
              </div>
            </th>
            <th className={styles.editCell}>
              <div>
                <p className={styles.editButton} onClick={openEditPopup}>수정</p>
                <p className={styles.deleteButton} onClick={openDeletePopup}>삭제</p>
                <strong>10000 원</strong>
              </div>
            </th>
          </tr>
        </thead>
      </table>
      {isPlusPopupOpen && <PlusPopup onClose={() => setIsPlusPopupOpen(false)} />}
      {isEditPopupOpen && <EditPopup onClose={() => setIsEditPopupOpen(false)} />}
      {isDeletePopupOpen && <DeletePopup onClose={() => setIsDeletePopupOpen(false)} />}
    </div>
  );
}

export default Showlist;
