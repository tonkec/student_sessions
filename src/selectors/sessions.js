export default(sessions, {sortBy}) => {
  return sessions.filter((session) => {
    const studentEmail = session.studentEmail ? session.studentEmail : "no email provided"
    return studentEmail;
  }).sort((a,b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'email') {
      return a.studentEmail < b.studentEmail ? -1 : 1;
    }
  })
}
