import React from 'react';
import { connect } from 'react-redux';
import selectSessions from '../selectors/sessions';
import SessionItem from './SessionItem';

const SessionsSummary = (props) => {
  return (
    <div>
      {
      props.sessions.length === 0 ? (
        <p>You don't have any sessions</p>
      ) : (
          <div>
            {props.sessions.map((session, i) => {
              return (
                <SessionItem i={i} key={session.id} {...session} />
              )
            })}
          </div>
        )
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  const total = selectSessions(state.sessions, state.filters);
  const totalSessions = total.slice(0, 5);
  return {
     sessions: totalSessions
   }
}

export default connect(mapStateToProps)(SessionsSummary);
