import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer
} from "recharts";
import moment from "moment";

const BarChartSessions = ({ data }) => (
  <ResponsiveContainer width="100%" height={200}>
    <BarChart data={data} style={{ marginTop: 100 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="email" hide={true} />
      <YAxis
        label={{ value: "hours", angle: -90, position: "insideLeft" }}
        tickFormatter={value => {
          let formated = moment.duration(value, "seconds");
          return formated._data.hours;
        }}
      />
      <Tooltip
        formatter={value => {
          let formated = moment.duration(value, "seconds");
          return `${formated._data.hours}h:${formated._data.minutes}m:${
            formated._data.seconds
          }s`;
        }}
      />
      <Bar dataKey="duration" fill="#2ec4b6" />
    </BarChart>
  </ResponsiveContainer>
);

export default BarChartSessions;
