import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const PieChartSessions = ({ data, dataKey, nameKey, fill, description }) => (
  <div style={{ width: "100%", height: 200, marginTop: 150 }}>
    <p className="text-center">{description} </p>
    <ResponsiveContainer>
      <PieChart width={730} height={250}>
        <Pie
          data={data}
          dataKey={dataKey}
          nameKey={nameKey}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill={fill}
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default PieChartSessions;
