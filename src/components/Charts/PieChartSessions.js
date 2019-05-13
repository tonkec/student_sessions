import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const PieChartSessions = ({ data, dataKey, nameKey }) => (
  <div style={{ width: "100%", height: 300 }}>
    <ResponsiveContainer>
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
    </ResponsiveContainer>
  </div>
);

export default PieChartSessions;
