/* eslint-disable react/prop-types */
import styles from "./order_list.module.css";

const FoodImg = ({ filename }) => {

    const foodname = "슈비버거";
    const foodnumber = "1";
    const foodprice = "5800"

    return(
        <div className={styles.img_contain}>
            <img className={styles.menu_img} alt="food" src = {filename} />
            <div>
                <p className={styles.foodtitle}>{foodname}</p>
                <ul className={styles.foodoptions}>
                    <li>수량 : {foodnumber} </li>
                    <li>가격 : {foodprice}원 </li>
                </ul>
            </div>
        </div>
    );
}

export default FoodImg;