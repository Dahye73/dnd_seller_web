/* eslint-disable react/prop-types */
import MenuBox from "./menubox";

const OrderList = ({orderid}) => {

    return(

        <>
            <div>
                <MenuBox orderid={orderid}/>
            </div>            
        </>
    );
}

export default OrderList;