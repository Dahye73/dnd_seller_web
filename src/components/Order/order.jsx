import { useState } from 'react';
import styles from "./order.module.css";
import SearchBar from "./search/search";
import Foodmenubox from "./foodmenu/foodmenu";

const Order = () => {
    const [showCompleted, setShowCompleted] = useState(false);

    const handleButtonClick = () => {
        setShowCompleted(!showCompleted);
    }

    return (
        <>
            <SearchBar />
            <p className = {styles.title}>주문현황</p>
            <div className = {styles.wrap}>
                <div className = {styles.wrap_menu}>
                    <Foodmenubox orderid = "Order #1"/>
                    <Foodmenubox orderid = "Order #2"/>
                    <Foodmenubox orderid = "Order #3"/>
                    <Foodmenubox orderid = "Order #4"/>
                    <Foodmenubox orderid = "Order #5"/>
                    <Foodmenubox orderid = "Order #6"/>
                    <Foodmenubox orderid = "Order #7"/>
                </div>
                <p className = {styles.title}>신규주문</p>
                <div className = {styles.wrap_menu}>
                    <Foodmenubox orderid = "Order #1"/>
                    <Foodmenubox orderid = "Order #2"/>
                    <Foodmenubox orderid = "Order #3"/>
                    <Foodmenubox orderid = "Order #4"/>
                    <Foodmenubox orderid = "Order #5"/>
                    <Foodmenubox orderid = "Order #6"/>
                    <Foodmenubox orderid = "Order #7"/>
                </div>

                <p className = {styles.title}>
                  완료된 주문
                  <button onClick={handleButtonClick}>
                    {showCompleted ? 'Hide' : 'Show'}
                  </button>
                </p>
                {showCompleted && (
                  <div className = {styles.wrap_menu}>
                    <Foodmenubox orderid = "Order #1"/>
                    <Foodmenubox orderid = "Order #2"/>
                    <Foodmenubox orderid = "Order #3"/>
                    <Foodmenubox orderid = "Order #4"/>
                    <Foodmenubox orderid = "Order #5"/>
                    <Foodmenubox orderid = "Order #6"/>
                    <Foodmenubox orderid = "Order #7"/>
                </div>
                )}
            </div>
        </>
    );
}

export default Order;
