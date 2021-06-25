import styles from '../styles/HamburgerNav.module.css'
import { Context } from '../context/Context'
import { useContext } from 'react'

export default function HamburgerNav() {

    const {handleNavClick, planets, currentPlanet} = useContext(Context)

    return (
        <div>

        </div>
    )
}