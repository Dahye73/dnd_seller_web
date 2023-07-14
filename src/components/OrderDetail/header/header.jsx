import { useLocation } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {

    const location = useLocation();
    const { orderid } = location.state;

    return(
        <div className = {styles.header}>
            <p className = {styles.orderId}>{orderid}</p>
            <p className = {styles.orderDate}>2023-07-13</p>
        </div>
    )

}

export default Header;