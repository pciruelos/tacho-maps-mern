import React,{useContext} from 'react'
import {NavLink} from 'react-router-dom';

import {AuthContext} from '../../context/auth-context'

import './NavLinks.css';

const NavLinks = (props) => {
    const auth = useContext(AuthContext);

  return (
    <ul className="nav-links" >
        <li>
            <NavLink to='/alltachos'>All Tachos</NavLink>
        </li>
        <li>
            <NavLink to='/' exact>All users</NavLink>
        </li>
        {auth.isLoggedIn && <li>
            <NavLink to='/u1/places'>my tacho</NavLink>
        </li>}
        {auth.isLoggedIn &&<li>
            <NavLink to='/places/new'>Add Tacho</NavLink>
        </li>}
        {!auth.isLoggedIn &&<li>
            <NavLink to='/auth'>Auth</NavLink>
        </li>}
        {auth.isLoggedIn && <li>
            <button onClick={auth.logout}>Log Out</button>
        </li> }
        
    </ul>
  )
}

export default NavLinks