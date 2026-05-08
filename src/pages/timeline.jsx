

import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaVideo,
  FaRegCommentDots,
  FaHandshake,
} from "react-icons/fa";

const Timeline = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [filter, setFilter] = useState("All");

 useEffect(() => {
  const savedTimeline =
    JSON.parse(localStorage.getItem("timeline")) || [];

  setTimelineData(savedTimeline);
}, []);


  const filteredData =
    filter === "All"
      ? timelineData
      : timelineData.filter((item) => item.type === filter);

 
  const getIcon = (type) => {
    switch (type) {
      case "Call":
        return (
          <div className="text-xl text-gray-500">
            <FaPhoneAlt />
          </div>
        );

      case "Video":
        return (
          <div className="text-xl text-blue-500">
            <FaVideo />
          </div>
        );

      case "Text":
        return (
          <div className="text-xl text-green-500">
            <FaRegCommentDots />
          </div>
        );

      case "Meetup":
        return (
          <div className="text-xl text-yellow-500">
            <FaHandshake />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-base-200 px-4 md:px-10 py-10">
      <div className="max-w-4xl mx-auto">
      
        <h1 className="text-5xl font-bold text-gray-800 mb-8">
          Timeline
        </h1>

        
        <div className="mb-6">
          <select
            className="select select-bordered bg-white w-full max-w-xs"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Call</option>
            <option>Video</option>
            <option>Text</option>
            <option>Meetup</option>
          </select>
        </div>

       
        <div className="space-y-4">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4 hover:shadow-md transition"
            >
          
              <img
                src={item.picture}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover"
              />

          
              <div>{getIcon(item.type)}</div>

          
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.type}
                  <span className="font-normal text-gray-500">
                    {" "}
                    with {item.name}
                  </span>
                </h2>

                <p className="text-sm text-gray-400 mt-1">
                  Next Contact: {item.date}
                </p>

               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;