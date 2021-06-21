import styles from '../styles/PlanetImage.module.css'
import { Context } from '../context/Context'
import { useContext } from 'react'

export default function PlanetImage() {

    const {currentPlanet, currentLayer} = useContext(Context)

    return (
        <div className={styles.container}>
            <div className={styles.imageFlexContainer}>
                {
                    currentLayer === "internal" ?
                    <img src={`public/.${currentPlanet.images.internal}`} alt={`${currentPlanet.name} image`} className={styles.img}  /> :
                    <img src={`public/.${currentPlanet.images.planet}`} alt={`${currentPlanet.name} image`} className={styles.img}  /> 
                    
                }
            </div>
            {
                currentLayer === "surface" ?
                <div className={styles.hoverContainer}>
                <img src={`public/.${currentPlanet.images.geology}`} alt={`${currentPlanet.name} image`} className={styles.imgHover}  />  
            </div> : ''
            }
            
        </div>
    )
}