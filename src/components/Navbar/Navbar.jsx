// module imports
import React from 'react'

// styles imports
import './navbar.css'

// Assets imports
import logo from "../../assets/airbnb 1.svg"

const Navbar = () => {
  return (
    <>
        <nav>
            <img className="nav--image" src={logo} alt="" />
        </nav>
    </>
  )
}

export default Navbar