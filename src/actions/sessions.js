import uuid from 'uuid';
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
