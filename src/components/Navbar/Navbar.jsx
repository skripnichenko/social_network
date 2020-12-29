import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={c.nav}>
        <div className={c.item} >
          <NavLink to='/profile' activeClassName={c.activelink}>Profile</NavLink>
        </div><div className={`${c.item} ${c.active}`}>
          <NavLink to='/dialogs' activeClassName={c.activelink}>Messages</NavLink>
        </div><div className={c.item}>
          <NavLink to='/users' activeClassName={c.activelink}>Users</NavLink>
        </div><div className={`${c.item} ${c.active}`}>
          <NavLink to='$' activeClassName={c.activelink}>Messages</NavLink>
        </div><div className={c.item}>
          <NavLink to='$' activeClassName={c.activelink}>Music</NavLink>
        </div><div className={c.item}>
          <NavLink to='$' activeClassName={c.activelink}>Settings</NavLink>
        </div>            
      </nav>
    )
}

export default Navbar;