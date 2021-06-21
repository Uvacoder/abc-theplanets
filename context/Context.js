import React, {useState} from 'react'
import data from '../data/data.json'

const Context = React.createContext()

function ContextProvider({ children }) {

    const [planets, setPlanets] = useState([...data])
    const [currentPlanet, setCurrentPlanet] = useState(data[2])
    const [currentLayer, setCurrentLayer] = useState("overview")

    function handleNavClick(arr) {
        setCurrentPlanet(arr)
    }

    function handleOverviewClick() {
        setCurrentLayer("overview")
    }

    function handleInternalStructureClick() {
        setCurrentLayer("internal")
    }

    function handleSurfaceGeologyClick() {
        setCurrentLayer("surface")
    }

    

    console.log(currentPlanet)

    return (
        <Context.Provider value={{currentPlanet, setCurrentPlanet, handleNavClick, planets, handleOverviewClick, handleInternalStructureClick, handleSurfaceGeologyClick, currentLayer}}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider}