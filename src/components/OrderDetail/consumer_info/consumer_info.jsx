import styles from "./consumer_info.module.css";

const ConsumerInfo = () => {

    const email = "sindahye730@gmail.com";
    const address = "부산광역시 부산진구 가야동";
    const phonenumber = "010-4116-9487";

    return (
        <div className={styles.contain}>
            <p className={styles.title}>주문자정보</p>
            <div className={styles.content}>
                <p>이메일 : {email}</p>
                <p>주소 : {address}</p>
                <p>전화번호 : {phonenumber}</p>
            </div>
        </div>
    );
}

export default ConsumerInfo;