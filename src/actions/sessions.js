import db from '../firebase/firebase';

// studentEmail = "default",
// duration = "",
// type = "",
// progress = "",
// description = "",
// note = "",
// count = 0,
// timestamp = 0

export const addSession = (session) => ({
  type: "ADD_SESSION",
  session
});

export const addSessionToDb = (sessionData = {}) => {
  return (dispatch) => {
    const { studentEmail = ""} = sessionData
    const session =  { studentEmail }
    // studentEmail: "value from input"

    // console.log(sessionData)
    return db.ref('sessions').push(session).then((ref) => {
      dispatch(addSession({
        id: ref.key,
        ...session
      }))
    });
  }
}

export const getSessions = (sessions) => ({
  type: "GET_SESSIONS",
  sessions
})

export const startGetSessions = () => {
  return (dispatch) => {
    return db.ref('sessions').once('value').then((snapshot) => {
      const sessions = [];

      snapshot.forEach((childSnapshot) => {
        sessions.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(getSessions(sessions));
    });
  }
}

// store.dispatch(removeSession({id: "asdasd2"}))

export const removeSession = ({ id } = {}) => ({
  type: 'REMOVE_SESSION',
  id
});

export const startRemoveSession = ({id}) => {
  return (dispatch) => {
    return db.ref(`sessions/${id}`).remove().then(() => {
      dispatch(removeSession({ id }))
    })
  }
}

export const editSession = (id, newData) => ({
  type: 'EDIT_SESSION',
  id,
  newData
});

export const startEditSession = (id, newData) => {
  return (dispatch) => {
    return db.ref(`sessions/${id}`).update(newData).then(() => {
      dispatch(editSession(id, newData))
    })
  }
}
