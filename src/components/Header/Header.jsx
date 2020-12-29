import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Header.module.css';

const Header = (props) => {
  return (
    <header className={c.header}>
      <img className={c.img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png' alt=''></img>
      <div className={c.loginBlock}>
        { props.isAuth ? <div>{props.login} <button onClick={props.logout} >Log out</button> </div> 
          : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>

  )
}

export default Header;