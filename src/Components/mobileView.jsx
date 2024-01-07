import React, { useState } from 'react';
import { NavLink } from "react-router-dom"
import logo from "./../images/Logo.png"
import { FaTimes } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

export const HamburgerMenu = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen); // Toggle the menuOpen state on button click
  };

  return (
    <div className='nav-mv'>
      {/* Button to toggle menu */}
      <div className='sm-content'>
        <div className="logo-sm">
          <img className="logo" src={props.logo} alt="logo"></img>
        </div>
        <div className="btn-sm">
          <div className='btn-4' onClick={handleMenuClick} style={{backgroundColor:props.bg, color:props.color}}>
            {menuOpen ? <FaTimes /> : <MdMenu />}
          </div>
        </div>
      </div>
      {/* Menu */}
      <div className={`menu menu-sm ${menuOpen ? 'show' : ''}`}>
        <div className='menu-close'>
          <div onClick={handleMenuClick} className="close-menu-button btn-4">
            <FaTimes />
          </div>
        </div>
        <div className="nav-sm">
          <div className="links-sm">
            <NavLink className="link-sm" to="/"><div className="nav-link nav-link-sm "><h3>HOME</h3></div></NavLink>
            <NavLink className="link-sm" to="/about"><div className="nav-link nav-link-sm"><h3>ABOUT</h3></div></NavLink>
            <NavLink className="link-sm" to="/careers"><div className="nav-link nav-link-sm"><h3>CAREERS</h3></div></NavLink>
            <NavLink className="link-sm" to="/contact"><div className="nav-link nav-link-sm"><h3>CONTACT</h3></div></NavLink>
          </div>
          <div className="logo-sm logo-ssm">
            <img className="logo" src={logo} alt="logo"></img>
          </div>
        </div>
      </div>
    </div>
  );
};