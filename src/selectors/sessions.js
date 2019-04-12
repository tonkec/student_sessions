export default(sessions) => {
  return sessions.filter((session) => {
    const studentEmail = session.studentEmail ? session.studentEmail : "no email provided"
    return studentEmail;
  })
}
