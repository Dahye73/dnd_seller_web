import Button from '@mui/material/Button';
import styles from './button.module.css';

const CancelBtn = () => {

    return (
        <div className={styles.cancel_btn} >
            <Button variant="outlined" color="error" size="large">주문 취소</Button>
        </div>
    );
}

export default CancelBtn;