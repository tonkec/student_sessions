import React from 'react';
import {connect} from 'react-redux';
import {startEditSession} from '../actions/sessions';
import SessionForm from './SessionForm';

export class EditSessionPage extends React.Component {
  onSubmit = (session) => {
    this.props.startEditSession(this.props.session.id, session)
    this.props.history.push('/');
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

const mapDispatchToProps = (dispatch, props) => ({
  startEditSession: (id, session) => dispatch(startEditSession(id, session))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditSessionPage);
