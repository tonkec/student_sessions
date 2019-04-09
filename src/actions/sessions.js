import uuid from 'uuid';

export const addSession = (
  {
    studentEmail = "",
    duration = "",
    type = "",
    progress = "",
    description = "",
    note = "",
    count = 0,
    timestamp = 0
  } = {}
) => ({
  type: "ADD_SESSION",
  session: {
    id: uuid(),
    studentEmail,
    duration,
    type,
    progress,
    description,
    note,
    count: count + 1,
    timestamp
  }
});
