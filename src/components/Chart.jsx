import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";


const Chart = ({radius, label, pendingTasks, completedTasks}) => {
  const chartData = [
    { name: "Pendding Tasks", value: pendingTasks, color: "#ED6A5A" },
    { name: "Completed Tasks", value: completedTasks, color: "#54D17E" },
  ];
  
  return (
    <>
      <ResponsiveContainer width='100%'>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={radius}
            fill="#8884d8"
            dataKey="value"
            label={label ? ({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%` : null}
            stroke="none"
          >
            {chartData.map((item, index) => (
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
