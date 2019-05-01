export default(sessions, {sortBy, sortDirection}) => {
  return sessions.filter((session) => {
    const studentEmail = session.studentEmail ? session.studentEmail : "no email provided"
    return studentEmail;
  }).sort((a,b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'email') {
      if (sortDirection === "ascending") {
        return a.studentEmail < b.studentEmail ? -1 : 1;
      } else if (sortDirection === "descending") {
        return a.studentEmail > b.studentEmail ? -1 : 1;
      }
    }
  })
}
