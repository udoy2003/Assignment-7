import React from "react";
import { Link } from "react-router-dom";

const FriendCard = ({ friend }) => {
  return (
    <Link to={`/friendsDetails/${friend.id}`} className="card bg-base-100 shadow-sm p-4">
      
      <figure>
        <img
          src={friend.picture}
          alt={friend.name}
          className="h-40 w-40 rounded-full object-cover"
        />
      </figure>

      <p className="text-center py-2">
        {friend.days_since_contact} d ago
      </p>

      <h2 className="card-title flex flex-col justify-center items-center py-2 gap-2">
        
        {friend.name}

        <div className="badge badge-accent text-gray-600">
          {friend.status}
        </div>

        <div className="flex flex-row gap-2 text-center flex-wrap">
          
          {friend.tags.map((tag, index) => (
            <div
              key={index}
              className="badge badge-warning"
            >
              {tag}
            </div>
          ))}

        </div>

      </h2>

    </Link>
  );
};

export default FriendCard;