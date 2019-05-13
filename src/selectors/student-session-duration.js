// duration of each student's session with formatted date
import moment from "moment";
export default sessions => {
  return sessions.map(session => {
    let hours = parseInt(session.duration.hours) * 3600;
    let minutes = parseInt(session.duration.minutes) * 60;
    let sum = hours + minutes + parseInt(session.duration.seconds);
    let formattedDate = moment(session.date).format("YYYY DD MM");
    return { date: formattedDate, duration: sum };
  });
};
