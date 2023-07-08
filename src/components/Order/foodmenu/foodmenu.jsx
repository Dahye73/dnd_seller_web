import PropTypes from 'prop-types';
import menustyle from "./foodmenu.module.css";

const Foodmenubox = ({ orderid }) => {
    return (
        <div className={menustyle.box}>
            <p className={menustyle.orderid}> {orderid} </p>
            <p className={menustyle.orderdate}> 2023-07-08 13:24</p>
        </div>
    )
}

Foodmenubox.propTypes = {
    orderid: PropTypes.string,
}

export default Foodmenubox;
