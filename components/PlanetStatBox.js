import styles from '../styles/PlanetStatBox.module.css'
import { Context } from '../context/Context'
import { useContext } from 'react'

export default function PlanetStatBox() {

    const {currentPlanet} = useContext(Context)

    return (
        <div className={styles.container}>
            <div className={styles.flexContainer}>
                <div className={styles.statBox}>
                    <span className={styles.statBoxSpan}>ROTATION TIME</span>
                    <h2 className={styles.statBoxH2}>{currentPlanet.rotation}</h2>
                </div>
                <div className={styles.statBox}>
                    <span className={styles.statBoxSpan}>REVOLUTION TIME</span>
                    <h2 className={styles.statBoxH2}>{currentPlanet.revolution}</h2>
                </div>
                <div className={styles.statBox}>
                    <span className={styles.statBoxSpan}>RADIUS</span>
                    <h2 className={styles.statBoxH2}>{currentPlanet.radius}</h2>
                </div>
                <div className={styles.statBox}>
                    <span className={styles.statBoxSpan}>AVERAGE TEMP</span>
                    <h2 className={styles.statBoxH2}>{currentPlanet.temperature}</h2>
                </div>
            </div>
        </div>
    )
}