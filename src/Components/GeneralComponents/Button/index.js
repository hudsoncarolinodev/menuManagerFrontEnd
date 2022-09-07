
import styles from './style.module.css'

const Button = ({children}) => {
    
    return <button className={styles.btnPrimary}>{children}</button>

}
export default Button;
