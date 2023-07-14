import { useState, useRef } from 'react';
import styles from "./order.module.css";
import SearchBar from "./search/search";
import Foodmenubox from "./foodmenu/foodmenu";
import Newfoodmenubox from './newfoodmenu/newfoodmenu';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import Rightbutton from './rightbutton/rightbutton';
import Leftbutton from './leftbutton/leftbutton';


const Order = () => {
    
    const [showCompleted, setShowCompleted] = useState(false);
    
    const orderContainerRef = useRef();
    const NeworderContainerRef = useRef();
    const completedContainerRef = useRef();

    const handleButtonClick = () => {
        setShowCompleted(!showCompleted);
    }

    const handleButtonClickScroll = (direction = 'right', distance = 800, containerRef) => {

        console.log(`${direction} button clicked!`);
                    
        const container = containerRef.current;

        if(container) {
            const scrollDistance = direction === 'right' ? distance : -distance;
            container.scroll({
                left: container.scrollLeft + scrollDistance,
                behavior: 'smooth'
            });
        }                                                           
    }

    return (
        <>
            <SearchBar />
            <p className = {styles.title}>주문현황</p>
            
            <div className = {styles.button_container}>
                <div className = {styles.wrap_menu} ref={orderContainerRef}>
                    <Foodmenubox orderid = "Order #1"/>
                    <Foodmenubox orderid = "Order #2"/>
                    <Foodmenubox orderid = "Order #3"/>
                    <Foodmenubox orderid = "Order #4"/>
                    <Foodmenubox orderid = "Order #5"/>
                    <Foodmenubox orderid = "Order #6"/>
                    <Foodmenubox orderid = "Order #7"/>
                </div>
                <Leftbutton onClick={() => handleButtonClickScroll('left', 800, orderContainerRef)}/>
                <Rightbutton onClick={() => handleButtonClickScroll('right', 800, orderContainerRef)} />

            </div>
                
            <p className = {styles.title}>신규주문</p>
            <div className = {styles.button_container}>
                <div className = {styles.wrap_menu} ref={NeworderContainerRef}>
                    <Newfoodmenubox neworderid = "Order #1"/>
                    <Newfoodmenubox neworderid = "Order #2"/>
                    <Newfoodmenubox neworderid = "Order #3"/>
                    <Newfoodmenubox neworderid = "Order #4"/>
                    <Newfoodmenubox neworderid = "Order #5"/>
                    <Newfoodmenubox neworderid = "Order #6"/>
                    <Newfoodmenubox neworderid = "Order #7"/>
                </div>
                <Leftbutton onClick={() => handleButtonClickScroll('left', 800, NeworderContainerRef)}/>
                <Rightbutton onClick={() => handleButtonClickScroll('right', 800, NeworderContainerRef)} />

            </div>
    
            <div className = {styles.completion_order}>
                <div className = {styles.title}>완료된 주문</div>
                <div>
                    {showCompleted 
                    ? <KeyboardControlKeyIcon className={styles.up_btn} onClick={handleButtonClick} />
                    : <KeyboardArrowDownIcon className={styles.down_btn} onClick={handleButtonClick} />
                    }
                </div>
            </div>
            {showCompleted && (
                <>
                    <div className = {styles.button_container}>
                        <div className = {styles.wrap_menu} ref={completedContainerRef}>
                            <Foodmenubox orderid = "Order #1"/>
                            <Foodmenubox orderid = "Order #2"/>
                            <Foodmenubox orderid = "Order #3"/>
                            <Foodmenubox orderid = "Order #4"/>
                            <Foodmenubox orderid = "Order #5"/>
                            <Foodmenubox orderid = "Order #6"/>
                            <Foodmenubox orderid = "Order #7"/>
                        </div>
                        <Leftbutton onClick={() => handleButtonClickScroll('left', 800, completedContainerRef)}/>
                        <Rightbutton onClick={() => handleButtonClickScroll('right', 800, completedContainerRef)} />
                    </div>
                </>
            )}
        </>
    );
}

export default Order;