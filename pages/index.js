import styles from '../styles/Home.module.css'
import PlanetImage from '../components/PlanetImage'
import PlanetInfo from '../components/PlanetInfo'

export default function Home() {
  return (
    <div className={styles.container}>
      <PlanetImage />
      <PlanetInfo />
    </div>
  )
}
