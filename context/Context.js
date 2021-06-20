import React, {useState} from 'react'
import data from '../data/data.json'

const Context = React.createContext()

function ContextProvider({ children }) {

    const [currentPlanet, setCurrentPlanet] = useState(data[2])

    function handleNavClick(arr) {
        setCurrentPlanet(arr)
    }

    console.log(currentPlanet)

    return (
        <Context.Provider value={{currentPlanet, setCurrentPlanet, handleNavClick}}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider}