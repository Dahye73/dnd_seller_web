import styles from "./order_status.module.css";

const OrderStatus = () => {
    const totalNumber = 2;
    const price = 11500;

    return (
        <>
            <div>
                <ul className={styles.bottom}>
                    <li>총 개수: {totalNumber}</li>
                    <li>가격: {price}</li>
                </ul>
            </div>
            <div>
                
            </div>
        </>
    );
}

export default OrderStatus;