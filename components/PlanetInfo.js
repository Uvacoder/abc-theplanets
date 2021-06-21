import styles from '../styles/PlanetInfo.module.css'
import { Context } from '../context/Context'
import { useContext } from 'react'

export default function PlanetImage() {

    const {currentPlanet} = useContext(Context)

    

    return (
        <div className={styles.container}>
            <div className={styles.infoTextContainer}>
                <h1>{currentPlanet.name}</h1>
                <p>Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.</p>
                <h3>Source: Wikipedia <a href="https://en.wikipedia.org/wiki/Venus#Surface_geology"></a></h3>
            </div>
            <div className={styles.buttonContainer}>
                <button>01 OVERVIEW</button>
                <button>02 INTERNAL STRUCTURE</button>
                <button>03 SURFACE GEOLOGY</button>
            </div>
            
            
        </div>
    )
}