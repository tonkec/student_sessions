import React, { Component } from "react";
import SessionsSummary from "./SessionsSummary";
import SessionsFilters from "./SessionsFilters";
import Message from "./Message";
import { showMessage } from "../actions/messages";
import { connect } from "react-redux";

class Dashboard extends Component {
  state = {
    show: false
  };

  componentDidMount = () => {
    if (this.props.messages.show) {
      this.setState({ show: true });
      setTimeout(() => {
        this.setState({ show: false });
        this.props.showMessage({ show: false });
      }, 3000);
    }
  };

  render() {
    return (
      <div>
        {this.state.show && <Message message={this.props.messages.message} />}
        <h1> Your Sessions </h1>
        <SessionsFilters />
        <SessionsSummary />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  let messages = state.messages;
  return {
    messages: messages
  };
};

const mapDispatchToProps = (dispatch, state) => ({
  showMessage: (show, message) => dispatch(showMessage(show, message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
