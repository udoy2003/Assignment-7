import React, { useEffect, useState } from "react";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const FriendAnalytics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
  
    const timeline =
      JSON.parse(localStorage.getItem("timeline")) || [];

    const callCount = timeline.filter(
      (item) => item.type === "Call"
    ).length;

    const textCount = timeline.filter(
      (item) => item.type === "Text"
    ).length;

    const videoCount = timeline.filter(
      (item) => item.type === "Video"
    ).length;

  
    const chartData = [
      {
        name: "Text",
        value: textCount,
      },
      {
        name: "Call",
        value: callCount,
      },
      {
        name: "Video",
        value: videoCount,
      },
    ];

    setData(chartData);
  }, []);

  const COLORS = [
    "#7C3AED",
    "#1F4B3F",
    "#34A853",
  ];

  return (
    <div className="max-w-7xl mx-auto  px-4 py-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-[#1f2937] mb-8">
          Friendship Analytics
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6">

          <h2 className="text-sm font-semibold text-[#234b3c] mb-8">
            By Interaction Type
          </h2>

          <div className="w-full h-80">

            <ResponsiveContainer width="100%" height="100%">

              <PieChart>

                <Pie
                  data={data}
                  cx="50%"
                  cy="45%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />

                <Legend
                  verticalAlign="bottom"
                  align="center"
                  iconType="circle"
                />

              </PieChart>

            </ResponsiveContainer>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendAnalytics;