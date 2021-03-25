import React from "react"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className="container-fluid navbar-expand-md nav-bar-flex">
        <div className="nav-bar-left">
          Logo
        </div>
        <div className="nav-bar-right">
          <Link className="nav-item btn" to="/">Home</Link>
          <Link className="nav-item btn" to="/about">About</Link>
          <Link className="nav-item btn" to="/skills">Skills</Link>
          <Link className="nav-item btn" to="/blog">Blog</Link>
          <Link className="nav-item btn" to="/contact">Contact</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
