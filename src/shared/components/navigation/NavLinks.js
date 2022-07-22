import React from 'react'
import {NavLink} from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
        <li>
            <NavLink to='/' exact>All users</NavLink>
        </li>
        <li>
            <NavLink to='/u1/places'>my tacho</NavLink>
        </li>
        <li>
            <NavLink to='/places/new'>Add Tacho</NavLink>
        </li>
        <li>
            <NavLink to='/auth'>Auth</NavLink>
        </li>
        <li>
            <NavLink to='/alltachos'>All Tachos</NavLink>
        </li>
    </ul>
  )
}

export default NavLinks