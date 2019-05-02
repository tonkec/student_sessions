import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const PieChartSessions = ({ data, dataKey, nameKey }) => (
  <PieChart width={730} height={250}>
    <Pie
      data={data}
      dataKey={dataKey}
      nameKey={nameKey}
      cx="50%"
      cy="50%"
      outerRadius={80}
      fill="#8884d8"
      label
    />
    <Tooltip />
  </PieChart>
);

export default PieChartSessions;
