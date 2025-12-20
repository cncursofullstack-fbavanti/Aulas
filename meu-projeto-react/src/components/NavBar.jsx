import React from "react";
import { Link } from "react-router"

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="flex flex-row gap-4 p-2 justify-center text-xl">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;