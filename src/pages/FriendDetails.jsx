import React from "react";
import { useLoaderData, useParams } from "react-router";
import {
  FaPhoneAlt,
  FaVideo,
  FaRegCommentDots,
  FaTrashAlt,
  FaArchive,
  FaBell,
} from "react-icons/fa";

const FriendDetails = () => {
 
  const {id } = useParams();

  const friends = useLoaderData();
  const expectedFriend = friends.find(friend => friend.id == id);
// timeline controlling  code :

  const handleInteraction = (type) => {
  const newInteraction = {
    id: Date.now(),
    type,
    name: expectedFriend.name,
    picture: expectedFriend.picture,
    date: new Date().toLocaleString(),
  };

  const existing =
    JSON.parse(localStorage.getItem("timeline")) || [];

  localStorage.setItem(
    "timeline",
    JSON.stringify([newInteraction, ...existing])
  );
};



  return (
       <div className="bg-[#f3f4f6] w-full max-w-7xl mx-auto py-8 px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
              
      
              <div className="space-y-4">
                
        
                <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                  <img
                    src={expectedFriend.picture}
                    className="w-20 h-20 rounded-full mx-auto object-cover"
                  />
      
                  <h2 className="text-2xl font-bold text-[#1f2937] mt-4">
                   {expectedFriend.name}
                  </h2>
      
                  <div className="mt-3 flex flex-col items-center gap-2">
                    <span className="badge badge-error text-white px-4 py-3">
                     {expectedFriend.status}
                    </span>
      
                    <span className="badge badge-success text-white px-4 py-3">
                   {expectedFriend.tags.map((tag, index) => (
            <div key={index}>
              {tag}
            </div>
          ))}
                    </span>
                  </div>
      
                  <p className="italic text-[#64748b] mt-5 text-lg">
                    {expectedFriend.bio}
                  </p>
      
                  <p className="text-sm text-[#94a3b8] mt-3">
                    {expectedFriend.email}
                  </p>
                </div>
      
         
                <button className="btn w-full bg-white  hover:bg-gray-50 text-gray-700 rounded-lg">
                  <FaBell />
                  Snooze 2 Weeks
                </button>
      
                <button className="btn w-full bg-white  hover:bg-gray-50 text-gray-700 rounded-lg">
                  <FaArchive />
                  Archive
                </button>
      
                <button className="btn w-full bg-white  hover:bg-red-50 text-red-500 rounded-lg">
                  <FaTrashAlt />
                  Delete
                </button>
              </div>
      
          
              <div className="lg:col-span-2 space-y-5">
      
               
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                    <h2 className="text-5xl font-bold text-[#234b3c]">{expectedFriend.days_since_contact}</h2>
                    <p className="text-[#64748b] mt-2">Days Since Contact</p>
                  </div>
      
                  <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                    <h2 className="text-5xl font-bold text-[#234b3c]">{expectedFriend.goal} </h2>
                    <p className="text-[#64748b] mt-2">Goal(Days)</p>
                  </div>
      
                  <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                    <h2 className="text-3xl font-bold text-[#234b3c]">
                    {expectedFriend.next_due_date}
                    </h2>
                    <p className="text-[#64748b] mt-2">Next Due</p>
                  </div>
                </div>
      
              
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-[#234b3c]">
                      Relationship Goal
                    </h2>
      
                    <button className="btn btn-sm bg-gray-100 border-gray-200 hover:bg-gray-200">
                      Edit
                    </button>
                  </div>
      
                  <p className="text-lg text-[#64748b] mt-6">
                    Connect every <span className="font-bold text-black">30 days</span>
                  </p>
                </div>
      
               
                <div className="bg-white rounded-xl shadow-sm  p-6">
                  <h2 className="text-2xl font-semibold text-[#234b3c] mb-6">
                    Quick Check-In
                  </h2>
      
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    <button onClick={() => handleInteraction("Call")}  className=" rounded-xl py-8 flex flex-col shadow shadow-gray-300 items-center justify-center gap-3 hover:bg-gray-50 transition">
                      <FaPhoneAlt className="text-3xl text-gray-700" />
                      <span className="text-xl text-gray-700">Call</span>
                    </button>
      
                    <button onClick={() => handleInteraction("text")}  className=" rounded-xl py-8 flex flex-col shadow shadow-gray-300 items-center justify-center gap-3 hover:bg-gray-50 transition">
                      <FaRegCommentDots className="text-3xl text-gray-700" />
                      <span className="text-xl text-gray-700">Text</span>
                    </button>
      
                    <button onClick={() => handleInteraction("video")} className=" rounded-xl py-8 flex flex-col shadow shadow-gray-300 items-center justify-center gap-3 hover:bg-gray-50 transition">
                      <FaVideo className="text-3xl text-gray-700" />
                      <span className="text-xl text-gray-700">Video</span>
                    </button>
      
                  </div>
                </div>
      
              </div>
            </div>
          </div>
  );
};

export default FriendDetails;