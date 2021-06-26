import styles from '../styles/MobileLayerSelector.module.css'
import { Context } from '../context/Context'
import { useContext } from 'react'

export default function MobileLayerSelector() {

    const {currentPlanet, handleOverviewClick, handleInternalStructureClick, handleSurfaceGeologyClick, currentLayer} = useContext(Context)

    return (
        <div className={styles.container}>
            <span 
                className={styles.span}
                style={{borderBottom: currentLayer === "overview" ? `2px solid ${currentPlanet.highlight}` : '', color: currentLayer === "overview" ? 'white' : ''}}>OVERVIEW</span>
            <span
                className={styles.span}
                style={{borderBottom: currentLayer === "internal" ? `2px solid ${currentPlanet.highlight}` : '', color: currentLayer === "internal" ? 'white' : ''}}
            >STRUCTURE</span>
            <span
                className={styles.span}
                style={{borderBottom: currentLayer === "surface" ? `2px solid ${currentPlanet.highlight}` : '', color: currentLayer === "surface" ? 'white' : ''}}
            >GEOLOGY</span>
        </div>
    )
}