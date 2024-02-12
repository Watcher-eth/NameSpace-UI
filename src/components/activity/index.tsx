import React from "react";
import ActivityFeed from "./activityFeed";
import YourPortfolio from "./yourPortfolio";
import NewsTicker from "./newsTicker";

function ActivityPage() {
  return (
    <div className="flex w-[100vw] h-[94vh]   px-14 py-5 flex-col bg-[#0E0E0E]">
      <div className="text-[2.5rem] text-white py-4 font-bold">Activity</div>
      <div className="flex space-x-20">
        <ActivityFeed />
        <YourPortfolio />
      </div>
      <NewsTicker />
    </div>
  );
}

export default ActivityPage;
