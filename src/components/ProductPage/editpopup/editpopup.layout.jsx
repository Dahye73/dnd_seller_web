import React, { useState } from 'react';
import styles from "./editpopup.module.css"

const PlusPopup = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [price, setPrice] = useState(0);

  const closeModalHandler = () => {
    setIsOpen(false);
    onClose();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPrice(value);
  };

  const handleSubmit = () => {
    // 수정 로직 작성
    setIsOpen(false);
    onClose(); //수정 후 모달 창을 닫기 위해 onClose 함수를 호출합니다.
  };

  return (
    <>
      {isOpen && (
        <div className={styles.popup}>
          <div className={styles["popup-content"]}>
            <h2>메뉴 수정</h2>
            <div className={styles["imageUpload"]}>
              {image ? (
                <div>
                  <img src={image} alt="Uploaded" />
                </div>
              ):(
                <input id="file-upload" type="file" accept="image/*" onChange={handleImageChange} className={styles.hideFileInput} />
              )}  
            </div>

            <label htmlFor="file-upload">
              <br />
              <div className={styles["file-flex-row"]}>
                <span>파일 선택</span>
                <div className={styles["imageBox"]}>{image}</div>
              </div>
            </label>

            <div className={styles["product-flex-row"]}>
              <label>
                상품명
                <input type="text" value={productName} onChange={handleProductNameChange} />
              </label>
            </div>  

            <div className={styles["description-flex-row"]}>
              <label>
                상품 설명
                <textarea value={productDescription} onChange={handleProductDescriptionChange} />
              </label>
              </div>

            <div className={styles["price-flex-row"]}>
              <label>
                가격
                <input type="number" value={price} onChange={handlePriceChange} />
                원
              </label>
            </div>

            <div className={styles["popup-content-button"]}>
              <button onClick={handleSubmit}>수정</button>
              <button onClick={closeModalHandler}>취소</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlusPopup;
