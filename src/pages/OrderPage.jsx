import Order from"../components/Order/order";
import styles from "./OrderPage.module.css";

const OrderPage = () => {
  return (
    <div className = {styles.orderdiv}>
      <Order/>
    </div>
  );
};

export default OrderPage;
