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
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    const [screenSize, setScreenSize] = useState(undefined);

    const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
    setThemeSettings(false)
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
    setThemeSettings(false)
  };

const handleClick = (clicked) =>{
    setIsClicked({...initialStates, [clicked]: true})
};

const closeDropDowns = (clicked) =>{
    setIsClicked({...initialStates, [clicked]: false})
};
    return(
        <StateContext.Provider 
        value={{ setMode, setColor, currentColor, setCurrentColor, currentMode, setCurrentMode,
                themeSettings, setThemeSettings, activeMenu, setActiveMenu, isClicked, setIsClicked,
                 handleClick, closeDropDowns, screenSize, setScreenSize }}>
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)