import React from "react";
import { connect } from "react-redux";
import SessionItem from "./SessionItem";

const SessionPage = props => <SessionItem {...props.session} seeMore={false} />;

const mapStateToProps = (state, props) => {
  let session = state.sessions.find(s => s.id === props.match.params.id);
  return {
    session: session
  };
};

export default connect(mapStateToProps)(SessionPage);
