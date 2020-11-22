import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import menus from '../../config/menus'

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          {menus.map((v) => (
            <li className="nav-item" key={v.path}>
              <Link
                className={`nav-link ${pathname === v.path ? 'active' : ''}`}
                to={v.path}
              >
                {v.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
