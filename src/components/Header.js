import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to="/" exact={true}> Home | </NavLink>
    <NavLink to="/addSession" activeClassName="is-active">Add New | </NavLink>
    <NavLink to='/oldSessions'> Google Api Sessions </NavLink>
  </header>
)

export default Header;
