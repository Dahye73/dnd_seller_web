import styles from "./payment_info.module.css";

const PaymentInfo = () => {
    
    const amount = " 14,900원 ";
    const payment_method = "신용카드(국민은행)";

    return(
        <div className={styles.contain}>
            <p className={styles.title}>결제정보</p>
            <div className={styles.content}>
                <p>총 결제 금액 : {amount}</p>
                <p>결제 방법 : {payment_method}</p>
            </div>
        </div>
    );
}

export default PaymentInfo;