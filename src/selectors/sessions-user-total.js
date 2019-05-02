import _ from 'lodash';

export default (sessions) => {
  let groupedDurations = [];
  let students = []
  let perStudentSessions =  _.groupBy(sessions, function(s) {
    return s.studentEmail;
  });

  let perType =  _.groupBy(sessions, function(s) {
    return s.type;
  });

  console.log(perType)
  for (let i in perStudentSessions) {
    let duration = [];
    groupedDurations.push(duration);
    perStudentSessions[i].map((session,i) => {
      let parsed = {
        hours: parseInt(session.duration.hours),
        minutes: parseInt(session.duration.minutes),
        seconds: parseInt(session.duration.seconds)
      }
      duration.push(parsed);
    })
  }

  let time = [];
  for (let i in groupedDurations) {
    let arr = groupedDurations[i];
    let groupedHours = [];
    time.push(groupedHours)
    for (let j in arr) {
      groupedHours.push(arr[j].hours * 3600 + arr[j].minutes * 60 + arr[j].seconds)
    }
  }

  let sum = [];
  for (let i in time) {
    sum.push(time[i].reduce((partial_sum, a) => partial_sum + a,0));
  }

  for (let email in Object.keys(perStudentSessions)) {
    let obj = {email: Object.keys(perStudentSessions)[email], duration: sum[email]};
    students.push(obj)
  }

  return students;
};
