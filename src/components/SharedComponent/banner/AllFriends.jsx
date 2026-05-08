import React, { use } from "react";
import FriendCard from "../friendCard";

const friendsPromise = fetch("/friends.json").then((res) => res.json());

const AllFriends = () => {
  const friends = use(friendsPromise);

  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
      
      {friends.map((friend, id) => {
        return (
          <FriendCard
            key={id}
            friend={friend}
          />
        );
      })}

    </div>
  );
};

export default AllFriends;