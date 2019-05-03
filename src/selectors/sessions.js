// all sessions with filters included
export default (sessions, { sortBy, sortDirection, text }) => {
  return sessions
    .filter(session => {
      const studentEmail = session.studentEmail
        ? session.studentEmail
        : "no email provided";
      const textMatch =
        session.description.toLowerCase().includes(text.toLowerCase()) ||
        session.type.toLowerCase().includes(text.toLowerCase()) ||
        session.progress.toLowerCase().includes(text.toLowerCase()) ||
        session.note.toLowerCase().includes(text.toLowerCase()) ||
        session.studentEmail.toLowerCase().includes(text.toLowerCase());

      return studentEmail && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        if (sortDirection === "descending") {
          return new Date(b.createdAt) - new Date(a.createdAt);
        } else if (sortDirection === "ascending") {
          return new Date(a.createdAt) - new Date(b.createdAt);
        }
      } else if (sortBy === "email") {
        if (sortDirection === "ascending") {
          return a.studentEmail < b.studentEmail ? -1 : 1;
        } else if (sortDirection === "descending") {
          return a.studentEmail > b.studentEmail ? -1 : 1;
        }
      }
    });
};
