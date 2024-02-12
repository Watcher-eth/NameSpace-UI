import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Repeat2 } from "lucide-react";
import { motion } from "framer-motion";
function ActivityFeed() {
  //TODO: Add activity data
  const activity = [
    {
      userName: "Jesse",
      userPfp:
        "https://pbs.twimg.com/profile_images/1484575656759472128/4vLR6_4F_400x400.png",
      activityType: "swapped",
      currencyOne: "DOGE",
      currencyTwo: "USDC",
      amount: 12,
      logoOne:
        "https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png",
      logoTwo: "https://s2.coinmarketcap.com/static/img/coins/200x200/3408.png",
      date: "3min ago",
    },
    {
      userName: "Jesse",
      userPfp:
        "https://pbs.twimg.com/profile_images/1484575656759472128/4vLR6_4F_400x400.png",
      activityType: "swapped",
      currencyOne: "DOGE",
      currencyTwo: "USDC",
      amount: 12,
      logoOne:
        "https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png",
      logoTwo: "https://s2.coinmarketcap.com/static/img/coins/200x200/3408.png",
      date: "12min ago",
    },
    {
      userName: "Jesse",
      userPfp:
        "https://pbs.twimg.com/profile_images/1484575656759472128/4vLR6_4F_400x400.png",
      activityType: "swapped",
      currencyOne: "DOGE",
      currencyTwo: "USDC",
      amount: 12,
      logoOne:
        "https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png",
      logoTwo: "https://s2.coinmarketcap.com/static/img/coins/200x200/3408.png",
      date: "15min ago",
    },
    {
      userName: "Jesse",
      userPfp:
        "https://pbs.twimg.com/profile_images/1484575656759472128/4vLR6_4F_400x400.png",
      activityType: "swapped",
      currencyOne: "DOGE",
      currencyTwo: "USDC",
      amount: 12,
      logoOne:
        "https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png",
      logoTwo: "https://s2.coinmarketcap.com/static/img/coins/200x200/3408.png",
      date: "1hr ago",
    },
    {
      userName: "Jesse",
      userPfp:
        "https://pbs.twimg.com/profile_images/1484575656759472128/4vLR6_4F_400x400.png",
      activityType: "swapped",
      currencyOne: "DOGE",
      currencyTwo: "USDC",
      amount: 12,
      logoOne:
        "https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png",
      logoTwo: "https://s2.coinmarketcap.com/static/img/coins/200x200/3408.png",
      date: "3hr ago",
    },
    {
      userName: "Jesse",
      userPfp:
        "https://pbs.twimg.com/profile_images/1484575656759472128/4vLR6_4F_400x400.png",
      activityType: "swapped",
      currencyOne: "DOGE",
      currencyTwo: "USDC",
      amount: 12,
      logoOne:
        "https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png",
      logoTwo: "https://s2.coinmarketcap.com/static/img/coins/200x200/3408.png",
      date: "8hr ago",
    },
  ];
  return (
    <div className="flex flex-col items-center w-[60vw] space-y-3 ">
      {activity.map((item, index) => {
        return (
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center  w-[60vw] p-3 justify-between bg-[#2A2A2A]/[0.7] rounded-xl"
          >
            <div className="flex items-center">
              <Avatar className="h-[3.5rem] w-[3.5rem]">
                <AvatarImage src={item.userPfp} />
              </Avatar>
              <div className="flex flex-col ml-3 space-y-[-0.1rem]">
                <div className="text-[1.2rem] text-white">
                  {item.userName} {item.activityType}
                </div>
                <div className="text-[1rem] text-gray-300">
                  {item.amount} {item.currencyOne} for {item.currencyTwo}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={item.logoOne} />
              </Avatar>
              <Repeat2 strokeWidth={3} className="stroke-white" />
              <Avatar>
                <AvatarImage src={item.logoTwo} />
              </Avatar>
            </div>
            <div className="self-start text-gray-300 text-[1rem]">
              {item.date}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default ActivityFeed;
