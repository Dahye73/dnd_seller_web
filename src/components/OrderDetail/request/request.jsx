import styles from "./request.module.css";

const Request = () => {

    const text = '안녕하세요';

    return(
        <div className={styles.request}>
                
            <p className={styles.title}>요청사항</p>
            <p className={styles.content}>{text}</p>
        </div>
    );
}

export default Request;