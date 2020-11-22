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
          <Link className="nav-link active" to="/table">
            <span data-feather="home"></span>
            Table
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/wiki">
            <span data-feather="home"></span>
            Wiki
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/comments">
            <span data-feather="home"></span>
            Comments
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
