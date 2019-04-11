import React from 'react';
import {connect} from 'react-redux';
import {editSession} from '../actions/sessions';
import SessionForm from './SessionForm';

export class EditSessionPage extends React.Component {
  onSubmit = (session) => {
    this.props.dispatch(editSession(this.props.session.id, session))
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


export default connect(mapStateToProps)(EditSessionPage);
