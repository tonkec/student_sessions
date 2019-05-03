// session total duration
export default sessions => {
  return sessions
    .map(session => {
      let hours = parseInt(session.duration.hours) * 3600;
      let minutes = parseInt(session.duration.minutes) * 60;
      return hours + minutes + parseInt(session.duration.seconds);
    })
    .reduce((sum, value) => sum + value, 0);
};
