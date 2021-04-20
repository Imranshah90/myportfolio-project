import React, { useState } from 'react'
import './NavBar.css'
import { NavList } from './NavList'
import { NavLink } from 'react-router-dom'
import { FaBars,FaTimes } from 'react-icons/fa';
import Logo from './../images/logo.svg'


function NavBar() {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

   const NavLinks = NavList.map(({title,url}, index) => {
        return(
            <li key={index}>
                <NavLink exact to={url} activeClassName='active'onClick={handleClick}>{title}</NavLink>
            </li>
        );
   });

    return (
        <nav>
            <div className="logo">  <img src={Logo} alt="iShah" />
            </div>
            <div className="menu-icon" onClick={handleClick}>
             {click ?  <FaTimes /> :  <FaBars />}
            </div>
            <ul className={click ?  "nav-link" :  "nav-link close"}>{NavLinks}</ul>
        </nav>
    );
}

export default NavBar;
