import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg ">
    <a className="navbar-brand" href="/lux"> Luxury flats</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/lux">Home </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/lux/building">Building</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="">Apartments</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Location</a>
          </li>
      </ul>
    </div>
  </nav>
  </div>
  )
}

export default Navbar;