import styles from '../styles/PlanetInfo.module.css'
import { Context } from '../context/Context'
import { useContext } from 'react'

export default function PlanetImage() {

    const {currentPlanet, handleOverviewClick, handleInternalStructureClick, handleSurfaceGeologyClick} = useContext(Context)

    

    

    return (
        <div className={styles.container}>
            <div className={styles.infoTextContainer}>
                <h1>{currentPlanet.name}</h1>
                <p>Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.</p>
                <h3>Source: Wikipedia <a href="https://en.wikipedia.org/wiki/Venus#Surface_geology"></a></h3>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleOverviewClick} ><h4><span className={styles.buttonTextSpan}>01 </span>OVERVIEW</h4></button>
                <button className={styles.button} onClick={handleInternalStructureClick}><h4><span className={styles.buttonTextSpan}>02 </span>INTERNAL STRUCTURE</h4></button>
                <button className={styles.button} onClick={handleSurfaceGeologyClick}><h4><span className={styles.buttonTextSpan}>03 </span>SURFACE GEOLOGY</h4></button>
            </div>
            
            
        </div>
    )
}