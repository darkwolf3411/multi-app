import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './NavigationPanel.css'


export const NavigationPanel =(props)=>{
  const [isActive, setIsActive] = useState(false);
    return(
        <div className={`navigation__wrapper`}>
        <div
          onClick={() => setIsActive(!isActive)}
          className={`burger-menu-button__wrapper ${
            isActive ? "active-menu-button" : null
          }`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`burger-nav-menu__wrapper ${!isActive ? "active-menu" : null
          }`}>
          <NavLink onClick={() => setIsActive(!isActive)} to="/todo">ToDo App</NavLink>
          <NavLink onClick={() => setIsActive(!isActive)} to="/weather">Weather App</NavLink>
          <NavLink onClick={() => setIsActive(!isActive)} to="/password">Generate Passwords App</NavLink>
        </div>
      </div>
    )
}