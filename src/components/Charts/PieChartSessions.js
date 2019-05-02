import React from 'react';
import {PieChart, Pie, Tooltip} from 'recharts';
import moment from 'moment';

const PieChartSessions = ({data}) => (
  <PieChart width={730} height={250}>
    <Pie
      data={data}
      dataKey="count"
      nameKey="type"
      cx="50%"
      cy="50%"
      outerRadius={100}
      fill="#8884d8"
      label
      />
      <Tooltip />
  </PieChart>
);

export default PieChartSessions;
