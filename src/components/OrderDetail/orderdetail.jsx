import Backbutton from "./BackButton/backbutton";
import OrderInfo from "./order_info/order_info";
import Header from './header/header';
import styles from './orderdetail.module.css';
import Request from "./request/request";
import ConsumerInfo from "./consumer_info/consumer_info";
import PaymentInfo from "./payment_info/payment_info";
import CancelBtn from "./Button/order_cancel";

const OrderDetail = () => {

    return (
        <>
            <div className={styles.header}>
                <Backbutton />
                <Header />
                
            </div>
            <OrderInfo />
            <Request />
            <ConsumerInfo />
            <PaymentInfo />
            <CancelBtn />
            
        </>
    )
}

export default OrderDetail;