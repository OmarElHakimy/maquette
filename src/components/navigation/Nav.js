import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    
    return (
        <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
                <NavLink to ="/" className={({isActive}) => (isActive ? "nav-link text-white fontOne": "nav-link text-white fontThree")}>Home</NavLink>
            </li>
            <li>
                <NavLink to ="/Attoneys" className={({isActive}) => (isActive ? "nav-link text-white fontOne": "nav-link text-white fontThree")}>Attoneys</NavLink>
            </li>
            <li>
                <NavLink to ="/Practice Areas" className={({isActive}) => (isActive ? "nav-link text-white fontOne": "nav-link text-white fontThree")}>Practice Areas</NavLink>
            </li>
            <li>
                <NavLink to ="/About Us" className={({isActive}) => (isActive ? "nav-link text-white fontOne": "nav-link text-white fontThree")}>About Us</NavLink>
            </li>
        </ul>
    )
}
export default Nav;