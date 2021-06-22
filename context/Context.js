import React, {useEffect, useState, useCallback} from 'react'
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

    

    function planetSpecificColor() {
        return currentPlanet === "Mercury" ? "#419EBB" :
               currentPlanet === "Venus" ? "#EDA249" :
               currentPlanet === "Earth" ? "#6D2ED5" :
               currentPlanet === "Mars" ? "#D14C32" :
               currentPlanet === "Jupiter" ? "#D83A34" :
               currentPlanet === "Saturn" ? "#CD5120" :
               currentPlanet === "Uranus" ? "#1EC1A2" :
               "#2D68F0"
    }

    

    

    

    return (
        <Context.Provider value={{currentPlanet, setCurrentPlanet, handleNavClick, planets, handleOverviewClick, handleInternalStructureClick, handleSurfaceGeologyClick, currentLayer, planetSpecificColor}}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider}