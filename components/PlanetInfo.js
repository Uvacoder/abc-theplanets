import styles from '../styles/PlanetInfo.module.css'
import { Context } from '../context/Context'
import { useContext } from 'react'

export default function PlanetImage() {

    const {currentPlanet, handleOverviewClick, handleInternalStructureClick, handleSurfaceGeologyClick, currentLayer} = useContext(Context)

    const planetLayerText = currentLayer === "internal" ? currentPlanet.structure.content : 
                            currentLayer === "surface" ? currentPlanet.geology.content : currentPlanet.overview.content

    return (
        <div className={styles.container}>
            <div className={styles.infoTextContainer}>
                <h1 className={styles.infoTextContainerH1}>{currentPlanet.name}</h1>
                <p className={styles.infoTextContainerP}>
                    { planetLayerText }
                </p>
                <h3 className={styles.infoTextContainerH3}>Source: <span className={styles.infoTextContainerSpan}>Wikipedia</span><a href="https://en.wikipedia.org/wiki/Venus#Surface_geology"></a></h3>
            </div>
            <div className={styles.buttonContainer}>
                <button 
                    className={styles.button} 
                    onClick={handleOverviewClick} 
                    style={{backgroundColor: currentLayer === "overview" ? currentPlanet.highlight : ''}}>
                        <h4><span className={styles.buttonTextSpan}>01 </span>OVERVIEW</h4></button>
                <button 
                    className={styles.button} 
                    onClick={handleInternalStructureClick}
                    style={{backgroundColor: currentLayer === "internal" ? currentPlanet.highlight : ''}}>
                    
                        <h4><span className={styles.buttonTextSpan}>02 </span>INTERNAL STRUCTURE</h4></button>
                <button 
                    className={styles.button} 
                    onClick={handleSurfaceGeologyClick}
                    style={{backgroundColor: currentLayer === "surface" ? currentPlanet.highlight : ''}}>
                    
                        <h4><span className={styles.buttonTextSpan}>03 </span>SURFACE GEOLOGY</h4></button>
            </div>
        </div>
    )
}