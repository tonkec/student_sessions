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

const BarChartSessions = ({ data, xKey, yKey, barKey }) => (
  <ResponsiveContainer width="100%" height={200}>
    <BarChart data={data} style={{ marginTop: 100 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xKey} hide={true} />
      <YAxis
        dataKey={yKey}
        allowDuplicateCategory={false}
        angle={-45}
        tickFormatter={value => {
          let formatted = moment.duration(value, "seconds");
          return `${formatted._data.hours}h ${formatted._data.minutes}m`;
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
      <Bar dataKey={barKey} fill="#2ec4b6" />
    </BarChart>
  </ResponsiveContainer>
);

export default BarChartSessions;
