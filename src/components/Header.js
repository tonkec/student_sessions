import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";

const Header = ({ startLogout, email }) => (
  <header>
    <NavLink to="/dashboard"> Dashboard </NavLink>
    <NavLink to="/addSession" activeClassName="is-active">
      Add New{" "}
    </NavLink>
    <NavLink to="/sessionsGraph"> Graphs </NavLink>
    <NavLink to="/oldSessions"> Google Api Sessions </NavLink>
    <button onClick={startLogout} className="pull-right">
      Log out from {email}
    </button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

const mapStateToProps = (state, props) => ({
  email: state.auth.email
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
