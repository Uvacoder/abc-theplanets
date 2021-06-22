import styles from '../styles/Home.module.css'
import PlanetImage from '../components/PlanetImage'
import PlanetInfo from '../components/PlanetInfo'
import PlanetStatBox from '../components/PlanetStatBox'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <PlanetImage />
        <PlanetInfo />
      </div>
      <PlanetStatBox />
    </div>
  )
}
