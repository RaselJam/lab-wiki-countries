import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link to="/" >Wiki contries</Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
