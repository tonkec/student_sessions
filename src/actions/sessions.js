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
    db.ref('sessions').push(session).then((ref) => {
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
      snapshot.forEach((child) => {
        sessions.push({
          id: child.key,
          ...child.val()
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
