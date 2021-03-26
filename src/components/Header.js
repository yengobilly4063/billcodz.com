import React from "react"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm my_nav">
        <Link className="navbar-brand logo" id="diamond" to="/"><span className="logo_a">B</span><span
          className="logo_b">Y</span></Link>

        {/*Toogle button*/}
        <button className="navbar-toggler navbar-dark" data-toggle="collapse" data-target="#navBar">
          <span className="navbar-toggler-icon toggle_btn"></span>
        </button>

        {/*Nav-Bar List*/}
        <div className="collapse navbar-collapse" id="navBar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item .b_btn">
              <Link className="nav-link .b_btn" to="/about">About</Link>
            </li>
            <li className="nav-item .b_btn">
              <Link className="nav-link" to="/skills">Skills</Link>
            </li>
            <li className="nav-item .b_btn">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item .b_btn">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
