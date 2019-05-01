
import moment from 'moment';
let d = moment().format('YYYY MM DD');
console.log(d)


export default(sessions, {sortBy, sortDirection}) => {
  return sessions.filter((session) => {
    const studentEmail = session.studentEmail ? session.studentEmail : "no email provided";
    return studentEmail;
  }).sort((a,b) => {
    if (sortBy === 'date') {

      if (sortDirection === "descending") {
        return new Date(b.createdAt) - new Date(a.createdAt)
      } else if (sortDirection === "ascending") {
        return new Date(a.createdAt) - new Date(b.createdAt)
      }

    } else if (sortBy === 'email') {

      if (sortDirection === "ascending") {
        return a.studentEmail < b.studentEmail ? -1 : 1;
      } else if (sortDirection === "descending") {
        return a.studentEmail > b.studentEmail ? -1 : 1;
      }
      
    }
  })
}
