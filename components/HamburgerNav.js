import styles from '../styles/HamburgerNav.module.css'
import { Context } from '../context/Context'
import { useContext } from 'react'

export default function HamburgerNav() {

    const {handleNavClick, planets, currentPlanet, isNavOpen} = useContext(Context)

    return (
        <div className={styles.container}>
            <nav className={styles.nav} style={{display: isNavOpen ? "" : 'none'}} >
                <ul >

                </ul>
            </nav>
        </div>   
    )
}