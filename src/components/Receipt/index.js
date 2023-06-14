import styles from "./style.module.css";
import greenArrow from "../../images/green-arrow.png";

const Receipt = ({handleClick}) => {
    const handleClickBack = () => {
        handleClick(false);
    };
    return (
        <div className={styles.content}>
            <div className={styles.content__wrapper}>
                <div className={styles.content__date}>
                    <span className={styles.date}>27.12.2022</span>
                    <span className={styles.time}>10:20</span>
                    <span className={styles.box_office}>Касса #1</span>
                </div>
                <div className={styles.content__receipt}>
                    <div className={styles.content__receipt_printer}></div>
                    <div className={styles.content__receipt_body}>
                        <div className={styles.content__receipt_label}>Стоимость покупок</div>
                        <div className={styles.content__receipt_price}>
                            <span className={styles.integer}>820</span>
                            <span className={styles.decimal }>,95</span>
                            <span className={styles.currency}>₽</span>
                        </div>
                        <div className={styles.content__receipt_info}>
                            Приложите<br />или прокатайте карту
                        </div>
                    </div>
                </div>
                <div className={styles.content__arrow} >
                    <img src={greenArrow} alt="Arrow"/>
                </div>
            </div>
            <div className={styles.content__helper}>
                <div onClick={handleClickBack} className={styles.content__helper_back}></div>
                <div className={styles.content__helper_call}>Вызов сотрудника</div>
            </div>
        </div>
    )
}
export default Receipt;