import styles from "./order_list.module.css";
import FoodImg from "./food_img";
import OrderStatus from "../bottom/order_status";

const MenuBox = () => {

    
    const filenames = "/images/food.png";
    
    return(
        <>
            <div className = {styles.menubox}>
                <FoodImg filename = {filenames} />
                <FoodImg filename = {filenames} />
            </div>
            <div>
                <OrderStatus />
            </div>
        </>
    );
}

export default MenuBox;