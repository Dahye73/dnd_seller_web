import React from "react";
import styles from "./MainRootFooter.module.css";

const MainRootFooter = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.info}>
        <p>팀이름: DnD</p>
        <p>전화번호: 051-xxxx-xxxx</p>
        <p>주소: 부산광역시 가야대로 xxx xxx</p>
      </div>
      <div className={styles.right}>Copyright DnD. All Rights Reserved.</div>
    </section>
  );
};

export default MainRootFooter;
