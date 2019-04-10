import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to="/" exact={true}> Home </NavLink>
    <NavLink to='/oldSessions'> Google Api Sessions </NavLink>
    <NavLink to="/addSession" activeClassName="is-active">Add New</NavLink>
  </header>
)

export default Header;
