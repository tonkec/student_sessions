import React from 'react';
import {connect} from 'react-redux';
import {editSession} from '../actions/sessions';
import SessionForm from './SessionForm';

export class a extends React.Component {
  onSubmit = () => {
    console.log("save updated session to store")
  }
  render () {
    const {session} = this.props
    return (
      <div>
        <h1> Edit Session </h1>
        {console.log(this.props)}
        <SessionForm
          session={session}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state,props) => ({
  session: state.sessions.find((s) => s.id === props.match.params.id )
});

export default connect(mapStateToProps)(a);
