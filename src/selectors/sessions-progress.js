import _ from "lodash";

export default sessions => {
  let perType = _.groupBy(sessions, function(s) {
    return s.progress;
  });
  let arr = [];
  let keys = Object.keys(perType);
  let values = Object.values(perType);
  for (let i in values) {
    arr.push({ progress: keys[i], count: values[i].length });
  }
  return arr;
};
