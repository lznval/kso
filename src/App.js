import styles from './style.module.css';
import Receipt from './components/Receipt';
import {useState} from "react";
function App() {
    const [show, setShow] = useState(false);
    const handleClick = (state) => {
      setShow(state);
    };
  return (
    <div className={styles.wrapper}>
        {!show && <button onClick={() => handleClick(true)} className={styles.button}>Оплатить картой</button>}
        {show && <Receipt handleClick={handleClick} />}
    </div>
  );
}

export default App;
