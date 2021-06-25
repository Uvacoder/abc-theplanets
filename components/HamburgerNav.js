import styles from '../styles/HamburgerNav.module.css'
import { Context } from '../context/Context'
import { useContext } from 'react'

export default function HamburgerNav() {

    const {handleNavClick, planets, currentPlanet, isNavOpen, handleMobileNavTileClick} = useContext(Context)

    const navPlanets = planets.map((planet, index) => (
        <li key={index} 
            onClick={() => handleMobileNavTileClick(planet)}
            className={styles.li}
            ><div className={styles.leftFlex}>
               <div className={styles.highlight} style={{backgroundColor: planet.highlight}}></div>
                <div className={styles.planetName}>{planet.name}</div>  
            </div>
            <div className={styles.rightFlex}>
            <svg 
            className={styles.svgArrow}
            xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" 
            viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
            </div>
        </li>
    ))

    return (
        <div className={styles.container}>
            <nav className={styles.nav} style={{display: isNavOpen ? "" : 'none'}} >
                <ul className={styles.ul} >
                    {navPlanets}
                </ul>
            </nav>
        </div>   
    )
}