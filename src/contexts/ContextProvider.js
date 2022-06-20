import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialStates = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

export const ContextProvider = ({ children }) =>{
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialStates);
    const handleClick = (clicked) =>{
        setIsClicked({...initialStates, [clicked]: true})
    };
    const [screenSize, setScreenSize] = useState(undefined)
    return(
        <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick,screenSize, setScreenSize }}>
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)