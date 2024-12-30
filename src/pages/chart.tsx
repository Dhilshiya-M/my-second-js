import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const chartData = [
  { month: "January", revenue: 18600 },
  { month: "February", revenue: 30500 },
  { month: "March", revenue: 23700 },
  { month: "April", revenue: 7300 },
  { month: "May", revenue: 20900 },
  { month: "June", revenue: 21400 },
  { month: "July", revenue: 15000 },
  { month: "August", revenue: 27000 },
  { month: "September", revenue: 24000 },
  { month: "October", revenue: 19000 },
  { month: "November", revenue: 22000 },
  { month: "December", revenue: 28000 },
];

export function Component() {
  return (
    <div className="absolute top-[130px] right-[400px] left-[200px] w-[400px]">
    <div className="relative bg-white  p-4" style={{ width: 650, height: 300, left: 100, top: 10 }}>
      {/* Top Section */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-semibold text-gray-800">Revenue</h2>
        <span className="text-xs font-medium text-gray-600">Year 2020</span>
      </div>

      {/* Chart */}
      <LineChart width={600} height={230} data={chartData}>
        <CartesianGrid vertical={false} stroke="#e5e7eb" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={6}
          tickFormatter={(value) => value.slice(0, 3)}
          fontSize={10}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={6}
          domain={[0, 30000]}
          tickFormatter={(value) => `${value / 1000}k`}
          fontSize={10}
        />
        <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#52DBB2"
          strokeWidth={2}
          dot={{ r: 3 }}
        />
      </LineChart>
    </div></div>
  );
}
