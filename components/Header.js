import styles from '../styles/Header.module.css'
import { Context } from '../context/Context'
import { useContext } from 'react'

export default function Header() {

    const {handleNavClick, planets, currentPlanet, handleHamburgerClick} = useContext(Context)

    const navPlanets = planets.map((planet, index) => (
        <li key={index} 
            className={styles.li}
            onClick={(e) => handleNavClick(planet)}
            style={{borderTop: planet === currentPlanet ? `2px solid ${currentPlanet.highlight}` : ''}}
            >{planet.name}</li>
    ))

    return (
        <div className={styles.container}>
            <div className={styles.leftFlexContainer}>
               <h1>The Planets</h1> 
            </div>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    {navPlanets}
                </ul>
            </nav>
            <svg className={styles.svg} 
                 onClick={handleHamburgerClick}
                 xmlns="http://www.w3.org/2000/svg" 
                 width="24" height="24" 
                 viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
        </div>
    )
}