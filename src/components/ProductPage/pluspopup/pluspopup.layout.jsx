import React, { useState } from "react";
import styles from "./pluspopup.module.css";
import { uploadProduct } from "../../../utilities/uploadproduct.fetch";

const PlusPopup = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState(0);

  const closeModalHandler = () => {
    setIsOpen(false);
    onClose();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setImagePreview(URL.createObjectURL(file));
    setImage(file);
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

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      // const formData = new FormData();
      formData.append("image", image);
      formData.append("name", productName);
      formData.append("description", productDescription);
      formData.append("price", price);

      console.log(formData.get("image"));
      console.log(formData.get("name"));
      console.log(formData.get("description"));
      console.log(formData.get("price"));

      const response = await uploadProduct(formData);
      console.log(response); // 서버 응답 확인

      setIsOpen(false);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles.popup}>
          <div className={styles["popup-content"]}>
            <h2>메뉴 추가</h2>
            <div className={styles["imageUpload"]}>
              {imagePreview ? (
                <div>
                  <img
                    src={imagePreview}
                    alt="Uploaded"
                  />
                </div>
              ) : (
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className={styles.hideFileInput}
                />
              )}
            </div>

            <label htmlFor="file-upload">
              <br />
              <div className={styles["file-flex-row"]}>
                <span>파일 선택</span>
                <div className={styles["imageBox"]}>{imagePreview}</div>
              </div>
            </label>

            <div className={styles["product-flex-row"]}>
              <label>
                상품명
                <input
                  type="text"
                  value={productName}
                  onChange={handleProductNameChange}
                />
              </label>
            </div>

            <div className={styles["description-flex-row"]}>
              <label>
                상품 설명
                <textarea
                  value={productDescription}
                  onChange={handleProductDescriptionChange}
                />
              </label>
            </div>

            <div className={styles["price-flex-row"]}>
              <label>
                가격
                <input
                  type="number"
                  value={price}
                  onChange={handlePriceChange}
                />
                원
              </label>
            </div>

            <div className={styles["popup-content-button"]}>
              <button onClick={handleSubmit}>등록</button>
              <button onClick={closeModalHandler}>취소</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlusPopup;
