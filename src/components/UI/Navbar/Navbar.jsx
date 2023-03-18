import React from "react";
import { Link } from "react-router-dom";
import css from './Navbar.module.css'

const MyNavbar = () => {

  return (
    <div className={css.navbar}>
      <div className={css.navbar__links}>
        <Link to='/about'>About</Link>
        <Link to='/posts'>Posts</Link>
      </div>
    </div>
  )
}

export default MyNavbar;