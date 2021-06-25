import styles from '../styles/HamburgerNav.module.css'
import { Context } from '../context/Context'
import { useContext } from 'react'

export default function HamburgerNav() {

    const {handleNavClick, planets, currentPlanet, isNavOpen} = useContext(Context)

    return (
            <nav className={styles.container} style={{display: isNavOpen ? "block" : 'none'}}>
                <ul>

                </ul>
            </nav>
    )
}