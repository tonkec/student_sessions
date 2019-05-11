import db from "../firebase/firebase";

export const addSession = session => ({
  type: "ADD_SESSION",
  session
});

export const addSessionToDb = (sessionData = {}) => {
  return (dispatch, getState) => {
    const userId = getState().auth.uid
      ? getState().auth.uid
      : getState().auth.id;
    const {
      studentEmail = "",
      date = "",
      type = "",
      progress = "",
      note = "",
      description = "",
      duration = "",
      createdAt = 0
    } = sessionData;
    const session = {
      studentEmail,
      date,
      type,
      progress,
      note,
      description,
      duration,
      createdAt
    };

    return db
      .ref(`users/${userId}/sessions`)
      .push(session)
      .then(ref => {
        dispatch(
          addSession({
            id: ref.key,
            ...session
          })
        );
      });
  };
};

export const getSessions = sessions => ({
  type: "GET_SESSIONS",
  sessions
});

export const startGetSessions = () => {
  return (dispatch, getState) => {
    const userId = getState().auth.uid
      ? getState().auth.uid
      : getState().auth.id;
    return db
      .ref(`users/${userId}/sessions`)
      .once("value")
      .then(snapshot => {
        const sessions = [];

        snapshot.forEach(childSnapshot => {
          sessions.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(getSessions(sessions));
      });
  };
};

export const removeSession = ({ id } = {}) => ({
  type: "REMOVE_SESSION",
  id
});

export const startRemoveSession = ({ id }) => {
  return (dispatch, getState) => {
    const userId = getState().auth.uid
      ? getState().auth.uid
      : getState().auth.id;
    return db
      .ref(`users/${userId}/sessions/${id}`)
      .remove()
      .then(() => {
        dispatch(removeSession({ id }));
      });
  };
};

export const editSession = (id, newData) => ({
  type: "EDIT_SESSION",
  id,
  newData
});

export const startEditSession = (id, newData) => {
  return (dispatch, getState) => {
    const userId = getState().auth.uid
      ? getState().auth.uid
      : getState().auth.id;
    return db
      .ref(`users/${userId}/sessions/${id}`)
      .update(newData)
      .then(() => {
        dispatch(editSession(id, newData));
      });
  };
};
