import React, { useState } from 'react'
import './nav.css'
import { TiHome } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { RiServiceFill } from "react-icons/ri";
import { FaMessage } from "react-icons/fa6";

const Nav = () => {
  const[activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><TiHome /></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><FaUser /></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><FaBook /></a>
      <a href='#services' onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}>< RiServiceFill/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><FaMessage /></a>
    </nav>
  )
}

export default Nav