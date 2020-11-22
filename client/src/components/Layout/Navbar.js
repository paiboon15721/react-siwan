import React from 'react'
import { NavLink } from 'react-router-dom'
import menus from '../../config/menus'

const Navbar = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          {menus.map((v) => (
            <li className="nav-item" key={v.path}>
              <NavLink
                className="nav-link"
                to={v.path}
                activeClassName="active"
              >
                {v.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
