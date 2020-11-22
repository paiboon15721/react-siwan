import React from 'react'
import { useAuth } from '../../stores/authContext'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const { setToken } = useAuth()
  const history = useHistory()

  const handleSignout = () => {
    localStorage.removeItem('token')
    setToken('')
    history.push('/login')
  }

  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">
        Company name
      </a>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <input
        className="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <button onClick={handleSignout} className="btn btn-link nav-link">
            Sign out
          </button>
        </li>
      </ul>
    </header>
  )
}

export default Header
