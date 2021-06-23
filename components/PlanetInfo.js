import styles from '../styles/PlanetInfo.module.css'
import { Context } from '../context/Context'
import { useContext } from 'react'

export default function PlanetImage() {

    const {currentPlanet, handleOverviewClick, handleInternalStructureClick, handleSurfaceGeologyClick, currentLayer} = useContext(Context)

    const planetLayerText = currentLayer === "internal" ? currentPlanet.structure.content : 
                            currentLayer === "surface" ? currentPlanet.geology.content : currentPlanet.overview.content

    const planetLayerLink = currentLayer === "internal" ? currentPlanet.structure.source : 
                            currentLayer === "surface" ? currentPlanet.geology.source : currentPlanet.overview.source                        

    return (
        <div className={styles.container}>
            <div className={styles.infoTextContainer}>
                <h1 className={styles.infoTextContainerH1}>{currentPlanet.name}</h1>
                <p className={styles.infoTextContainerP}>
                    { planetLayerText }
                </p>
                <h3 className={styles.infoTextContainerH3}>Source: 
                    <span className={styles.infoTextContainerSpan}>Wikipedia</span>
                    <a href={planetLayerLink} target="_blank" rel="noopener noreferrer">
                    <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15.889v-2.223s-3.78-.114-7 3.333c1.513-6.587 7-7.778 7-7.778v-2.221l5 4.425-5 4.464z"/></svg></a></h3>
            </div>
            <div className={styles.buttonContainer}>
                <button 
                    className={styles.button} 
                    onClick={handleOverviewClick} 
                    style={{backgroundColor: currentLayer === "overview" ? currentPlanet.highlight : ''}}>
                        <h4 className={styles.buttonTextH4}><span className={styles.buttonTextSpan}>01 </span>OVERVIEW</h4></button>
                <button 
                    className={styles.button} 
                    onClick={handleInternalStructureClick}
                    style={{backgroundColor: currentLayer === "internal" ? currentPlanet.highlight : ''}}>
                    
                        <h4 className={styles.buttonTextH4}><span className={styles.buttonTextSpan}>02 </span>INTERNAL STRUCTURE</h4></button>
                <button 
                    className={styles.button} 
                    onClick={handleSurfaceGeologyClick}
                    style={{backgroundColor: currentLayer === "surface" ? currentPlanet.highlight : ''}}>
                    
                        <h4 className={styles.buttonTextH4}><span className={styles.buttonTextSpan}>03 </span>SURFACE GEOLOGY</h4></button>
            </div>
        </div>
    )
}