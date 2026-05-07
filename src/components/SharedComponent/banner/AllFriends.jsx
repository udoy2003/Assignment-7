import React, { use } from "react";

const friendsPromise = fetch("/friends.json").then((res) => res.json());

const AllFriends = () => {
  const friends = use(friendsPromise);

  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
      
      {friends.map((friend) => (
        <div
          key={friend.id}
          className="card bg-base-100 shadow-sm"
        >
          <figure>
            <img
              src={friend.picture}
              alt={friend.name}
              className="h-40 w-40 rounded-full object-cover"
            />
          </figure>
          <p className="text-center py-2">
            
              {friend.days_since_contact}
              d ago
            </p>
             <h2 className="card-title flex flex-col justify-center py-2 ">
              {friend.name}

              <div className="badge badge-accent  text-gray-600">

                {friend.status}
              </div>
              <div className="card-tag flex flex-row gap-2 text-center">
                
                {friend.tags.map((tag) => (
                  <div className="badge badge-warning">{tag}</div>

                )) }

              </div>
            </h2>
           


          
          </div>
      
      ))}

    </div>
  );
};

export default AllFriends;