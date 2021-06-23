
import styles from '../styles/Header.module.css'
import data from '../data/data.json'
import { Context } from '../context/Context'
import { useContext } from 'react'

export default function Header() {

    const {handleNavClick, planets, currentPlanet} = useContext(Context)

    
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
        </div>
    )
}