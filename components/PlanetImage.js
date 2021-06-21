import styles from '../styles/PlanetImage.module.css'
import data from '../data/data.json'
import { Context } from '../context/Context'
import { useContext } from 'react'
import Image from 'next'

export default function PlanetImage() {

    const {currentPlanet} = useContext(Context)

    console.log(`.${currentPlanet.images.planet}`)

    return (
        <div className={styles.container}>
            <div className={styles.imageFlexContainer}>
                <img src={`public/.${currentPlanet.images.planet}`} alt={`${currentPlanet.name} image`} className={styles.img}  />
            </div>
            
        </div>
    )
}