import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import styles from './backbutton.module.css';
import { useNavigate } from "react-router-dom";

const Backbutton = () => {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("../order");
    };

    return (
        <div className={styles.back_btn_container} onClick={handleClick}>
            <KeyboardBackspaceIcon className={styles.back_btn}/>
        </div>
    )
}

export default Backbutton;