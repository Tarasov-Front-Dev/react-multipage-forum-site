import React, { useContext } from "react";
import { Link } from "react-router-dom";
import css from './Navbar.module.css'
import {AuthContext} from '../../../context/context'

const MyNavbar = () => {
  let {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }

  return (
    <div className={css.navbar}>
      <div className={css.navbar__links}>
        <Link to='/about'>About</Link>
        <Link to='/posts'>Posts</Link>
      </div>
      {isAuth
        ? <Link
            to='/posts' 
            onClick={logout}
            className={css.logout}
          >LogOut</Link>
        : false
      }        
    </div>
  )
}

export default MyNavbar;