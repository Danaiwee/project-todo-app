import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { DASHBOARD_CHART_DATA } from "../constants/data.js";

const Chart = ({radius, label}) => {
  
  return (
    <>
      <ResponsiveContainer width='100%'>
        <PieChart>
          <Pie
            data={DASHBOARD_CHART_DATA}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={radius}
            fill="#8884d8"
            dataKey="value"
            label={label ? ({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%` : null}
            stroke="none"
          >
            {DASHBOARD_CHART_DATA.map((item, index) => (
              <Cell key={`cell-${index}`} fill={item.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(31, 41, 55, 0.8)",
              borderColor: "#4b5563",
            }}
            itemStyle={{ color: "#e5e7eb" }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
