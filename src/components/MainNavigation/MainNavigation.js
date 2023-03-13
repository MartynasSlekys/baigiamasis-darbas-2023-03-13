import React from 'react';
import { NavLink } from 'react-router-dom';
import '../MainNavigation/MainNavigation.css';

const MainNavigation = () => {
  return (
    <ul className='main-navigation'>
        <li>
            <NavLink to='/home'>Home</NavLink>
        </li>
    </ul>
  )
}

export default MainNavigation;