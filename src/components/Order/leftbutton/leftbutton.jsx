/* eslint-disable react/prop-types */

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import styles from "./leftbutton.module.css";

const Leftbutton = ({ onClick }) => {

    const handleClick = () => {

        if(onClick){
            onClick();
        }
    };

    return (
        <div className={styles.btn} onClick = {handleClick}>
            <NavigateBeforeIcon fontSize='large'></NavigateBeforeIcon>
        </div>
    )
}

export default Leftbutton;