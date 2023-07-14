import Foodmenulist from "./foodmenus";
import styles from "./order_info.module.css";

const OrderInfo = () =>{

    return(
        <>
            <div className={styles.orderinfo}>
                <Foodmenulist></Foodmenulist>
                <Foodmenulist></Foodmenulist>
                <Foodmenulist></Foodmenulist>
            </div>
        </>
    );
}

export default OrderInfo;