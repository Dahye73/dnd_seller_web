import React, { useState } from 'react';
import styles from "./deletepopup.module.css"

const DeletePopup = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModalHandler = () => {
    setIsOpen(false);
    onClose();
  };


  const handleSubmit = () => {
    // 등록 로직 작성
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className={styles.popup}>
          <div className={styles["popup-content"]}>
            <h2>정말 삭제하시겠습니까?</h2>
            <div className={styles["popup-content-button"]}>
              <button onClick={handleSubmit}>삭제</button>
              <button onClick={closeModalHandler}>취소</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeletePopup;
