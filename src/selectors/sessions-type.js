import _ from "lodash";

export default sessions => {
  let perType = _.groupBy(sessions, function(s) {
    return s.type;
  });
  let arr = [];
  let keys = Object.keys(perType);
  let values = Object.values(perType);
  for (let i in values) {
    arr.push({ type: keys[i], count: values[i].length });
  }
  return arr;
};
