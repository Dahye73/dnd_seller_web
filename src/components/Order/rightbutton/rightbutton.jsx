/* eslint-disable react/prop-types */

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import styles from "./rightbutton.module.css";

const Rightbutton = ({ onClick }) => {

    const handleClick = () => {
        if(onClick){
            onClick();
        }
    };

    return (
        <div className={styles.btn} onClick = {handleClick}>
            <NavigateNextIcon fontSize='large'></NavigateNextIcon>
        </div>
    )
}

export default Rightbutton;
