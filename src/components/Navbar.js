import React from 'react'
import "./Navbar.css"

// Components
import {NavLink, Link} from 'react-router-dom'
import {BsSearch, BsHouseDoorFill, BsPersonFill, BsCameraFill, BsHouseDashFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav id="nav">
        <Link to="/">ReactGram</Link>
        <form>
            <BsSearch />
            <input type='text' placeholder='Pesquisar'/> 
        </form>
        <ul id="nav-links">
            <li>
            <NavLink to="/">
                <BsHouseDashFill />
            </NavLink>
            </li>
            <li>
            <NavLink to="/login">
                Entrar
            </NavLink>
            </li>
            <li>
            <NavLink to="/register">
                Cadastrar
            </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar