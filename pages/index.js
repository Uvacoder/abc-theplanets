import styles from '../styles/Home.module.css'
import PlanetImage from '../components/PlanetImage'
import PlanetInfo from '../components/PlanetInfo'
import PlanetStatBox from '../components/PlanetStatBox'
import HamburgerNav from '../components/HamburgerNav'
import MobileLayerSelector from '../components/MobileLayerSelector'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <MobileLayerSelector />
        <HamburgerNav />
        <PlanetImage />
        <PlanetInfo />
      </div>
      <PlanetStatBox />
    </div>
  )
}
