import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav
    id="sidebarMenu"
    className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
  >
    <div className="position-sticky pt-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/wiki">Wiki</Link>
          <a className="nav-link active" aria-current="page" href="#">
            <span data-feather="home"></span>
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span data-feather="file"></span>
            Orders
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
