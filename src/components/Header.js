import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {startLogout} from '../actions/auth';

const Header = ({startLogout}) => (
  <header>
    <NavLink to="/dashboard"> Dashboard </NavLink>
    <NavLink to="/addSession" activeClassName="is-active">Add New </NavLink>
    <NavLink to='/oldSessions'> Google Api Sessions </NavLink>
    <button onClick={startLogout} className="pull-right"> Log out </button>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);
