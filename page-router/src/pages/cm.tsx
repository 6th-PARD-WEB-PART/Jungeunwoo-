import Link from "next/link";
import styles from "../styles/cm.module.css";

export default function CMPage(){
    return (
        <div className={styles.wrap}>
            <div className= {styles.card}>
                <h1 className={styles.title}>자기소개(css module)</h1>
                <p className={styles.row}><b>이름 :</b>정은우</p>
                <p className={styles.row}><b>나이 :</b>23살</p>
                <p className={styles.row}><b>취미 :</b>밥먹기</p>
                <p className={styles.row}><b>전공 :</b>전산심화</p>
                <Link href="/" className={styles.back}>-홈으로</Link>
            </div>
        </div>
    );
}
