import React from 'react'
import "./Navbar.css"

// Components
import {NavLink, Link} from 'react-router-dom'
import {BsSearch, BsHouseDoorFill, BsPersonFill, BsCameraFill, BsHouseDashFill, BsFillCameraFill, BsFillPersonFill} from 'react-icons/bs'

// Hooks
import { useState } from 'react'
import { useAuth } from '../hook/useAuth'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const {auth} = useAuth();
    const {user} = useSelector((state) => state.auth);

  return (
    <nav id="nav">
        <Link to="/">ReactGram</Link>
        <form id='search-form'>
            <BsSearch />
            <input type='text' placeholder='Pesquisar'/> 
        </form>
        <ul id="nav-links">
          {
            auth ? (
                <>
                  <li>
            <NavLink to="/">
                <BsHouseDashFill />
            </NavLink>
            </li>
            {
                user && (
                    <li>
                        <NavLink to={`/users/${user._id}`}>
                            <BsFillCameraFill />
                        </NavLink>
                    </li>
                )
            }
            <li>
                <NavLink to="/profile">
                    <BsFillPersonFill />
                </NavLink>
            </li>
            <li>
                <span>Sair</span>
            </li>
                </>
            ) : (
                <>
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
                </>
            )
          }
          
        </ul>
    </nav>
  )
}

export default Navbar