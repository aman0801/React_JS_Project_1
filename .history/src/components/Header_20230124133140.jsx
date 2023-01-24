import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from "react-router-hash-link";
import '../styles/Header.scss';

const Header = () => {
  return (
    <nav>
        <h1>TechStar</h1>
        <main>
            has
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/#about"}>About</Link>
            <Link to={"/#brands"}>Brands</Link>
            <Link to={"/services"}>Services</Link> 
        </main>
    </nav>
  )
}

export default Header
