import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout, logoutAsGuest } from "../actions/auth";
import { history } from "../routers/AppRouter";
class Header extends React.Component {
  handleLogOut = () => {
    const { auth, startLogout, logoutAsGuest } = this.props;
    if (auth.uid) {
      startLogout();
    } else if (auth.id === "guest") {
      logoutAsGuest();
      history.push("/");
      console.log(this.props);
    }
  };
  render() {
    return (
      <header>
        <NavLink to="/dashboard"> Dashboard </NavLink>
        <NavLink to="/addSession" activeClassName="is-active">
          Add New
        </NavLink>
        <NavLink to="/sessionsGraph"> Your Profile </NavLink>
        <button onClick={this.handleLogOut} className="btn-trans pull-right">
          Log out
        </button>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout()),
  logoutAsGuest: () => dispatch(logoutAsGuest())
});

const mapStateToProps = (state, props) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
