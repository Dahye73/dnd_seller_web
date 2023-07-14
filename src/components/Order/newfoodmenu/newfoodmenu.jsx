import PropTypes from 'prop-types';
import newmenustyle from "./newfoodmenu.module.css";

const Newfoodmenubox = ({ neworderid }) => {

    return (
        <div className={newmenustyle.box}>
            <p className={newmenustyle.neworderid}> { neworderid } </p>
            <p className={newmenustyle.neworderdate}> 2023-07-08 13:24</p>
        </div>
    )
}

Newfoodmenubox.propTypes = {
    neworderid : PropTypes.string,
}

export default Newfoodmenubox;
