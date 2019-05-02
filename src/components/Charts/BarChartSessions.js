import React from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts';
import moment from 'moment';

const BarChartSessions = ({data}) => (
  <BarChart width={730} height={250} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis
      dataKey="email"
      hide={true}/>
    <YAxis
      label={{ value: 'hours', angle: -90, position: 'insideLeft' }}
      tickFormatter={(value) => {
      let formated = moment.duration(value, 'seconds');
      return formated._data.hours
    }} />
    <Tooltip formatter={(value) => {
      let formated = moment.duration(value, 'seconds');
      return `${formated._data.hours}h:${formated._data.minutes}m:${formated._data.seconds}s`
    }} />
    <Legend wrapperStyle={{
        paddingTop: "20px"
    }}/>
    <Bar dataKey="duration" fill="#2ec4b6" />
  </BarChart>
);

export default BarChartSessions;
