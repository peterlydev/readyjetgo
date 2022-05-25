import React from 'react'
import { NavLink } from 'react-router-dom';
import "./navbar.css"

function index() {
  return (
    <nav className="navbar">
      <NavLink exact className= "home-nav" activeClassName="home" role="nav-home" to='/home' style={({ isActive }) => ({
              color: isActive ? '' : '',
              background: isActive ? '' : '',
              fontSize: '2rem',
              margin: '50px',
              
            })}>Home</NavLink>
      <NavLink exact activeClassName="main" className= "main-nav" to='/main' style={({ isActive }) => ({
              fontSize: '2rem',
              margin: '50px'
            })}>Spinner</NavLink>
      <NavLink exact className= "logout-nav" activeClassName="login" to='/login' style={({ isActive }) => ({
              color: isActive ? '' : '',
              background: isActive ? '' : '',
              fontSize: '2rem',
              margin: '50px'
            })}>Log out</NavLink>
    </nav>
  )
}

export default index
