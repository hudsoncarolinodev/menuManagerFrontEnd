
import styles from './style.module.css'
import MenuSidebar from './../../Menu/MenuSidebar'
import MenuContent from './../../Menu/MenuContent'

const Menu = () => {
    return (
        <main className={styles.mainMenu}>
            <MenuSidebar/>
            <MenuContent/>
        </main>
    )
}
export default Menu;
