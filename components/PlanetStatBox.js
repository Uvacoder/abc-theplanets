import styles from '../styles/PlanetStatBox.module.css'
import { Context } from '../context/Context'
import { useContext } from 'react'

export default function PlanetStatBox() {

    const {currentPlanet} = useContext(Context)

    

    return (
        <div className={styles.container}>
            <div className={styles.flexContainer}>
                <div className={styles.statBox}>
                    <span>ROTATION TIME</span>
                    <h2>{currentPlanet.rotation}</h2>
                </div>
                <div className={styles.statBox}>
                    <span>REVOLUTION TIME</span>
                    <h2>{currentPlanet.revolution}</h2>
                </div>
                <div className={styles.statBox}>
                    <span>RADIUS</span>
                    <h2>{currentPlanet.radius}</h2>
                </div>
                <div className={styles.statBox}>
                    <span>AVERAGE TEMP</span>
                    <h2>{currentPlanet.temperature}</h2>
                </div>
            </div>
        </div>
    )
}