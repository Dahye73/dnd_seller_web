import PropTypes from 'prop-types';
import menustyle from "./foodmenu.module.css";
import { useNavigate } from "react-router-dom";
import OrderList from './body/order_list';

const Foodmenubox = ({ orderid }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("../detail", { state : { orderid }});
    };

    return (
        <div className={menustyle.box} onClick={handleClick}>
            <div>
                <p className={menustyle.orderid}> {orderid} </p>
                <p className={menustyle.orderdate}> 2023-07-08 13:24</p>
            </div>
            <div>
                <OrderList orderid = {orderid}/>
            </div>
        </div>
    );
};

Foodmenubox.propTypes = {
    orderid: PropTypes.string,
};

export default Foodmenubox;
