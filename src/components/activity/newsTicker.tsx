import React from "react";
import { Tabs, TabsContent } from "../ui/tabs";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";

function NewsTicker() {
  //TODO: Fetch live updates
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
    <div>
      <Tabs defaultValue="Trending" className="">
        <TabsList className="mb-4 mt-8">
          <TabsTrigger value="Trending" className="pr-3 text-white">
            Trending
          </TabsTrigger>
          <TabsTrigger value="Popular" className="pr-3 text-gray-300">
            Popular
          </TabsTrigger>
          <TabsTrigger value="Newest" className="pr-3 text-gray-300">
            Newest
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Trending">
          <div className="w-[91vw] bg-[#2A2A2A]/[0.5] overflow-scroll py-3 px-5 flex items-center space-y-5">
            {activity.map((item, index) => {
              return (
                <ActivityNotif
                  userName={item.userName}
                  actionType={item.activityType}
                  amount={item.amount}
                  tokenOne={item.currencyOne}
                  tokenTwo={item.currencyTwo}
                  date={item.date}
                />
              );
            })}
          </div>
        </TabsContent>
        <TabsContent value="Popular">
          <div className="w-[91vw] bg-[#2A2A2A]/[0.5] overflow-scroll py-3 px-5 flex items-center space-y-5">
            {activity.map((item, index) => {
              return (
                <ActivityNotif
                  userName={item.userName}
                  actionType={item.activityType}
                  amount={item.amount}
                  tokenOne={item.currencyOne}
                  tokenTwo={item.currencyTwo}
                  date={item.date}
                />
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ActivityNotif(props: {
  userName: string;
  actionType: string;
  amount: number;
  tokenOne: string;
  tokenTwo: string;
  date: string;
}) {
  return (
    <div className="flex items-center p-2 justify-between  mr-2 bg-[#2A2A2A]/[0.7] rounded-lg">
      <div className="flex items-center ">
        <Avatar>
          <AvatarImage src="https://pbs.twimg.com/profile_images/1484575656759472128/4vLR6_4F_400x400.png" />
        </Avatar>
        <div className="flex flex-col ml-2 w-[15vw]">
          <div className="text-white text-[1.1rem] font-bold">
            {props.userName} {props.actionType}
          </div>
          <div className="text-gray-300 text-[1rem]">
            {props.amount} {props.tokenOne} for {props.tokenTwo}
          </div>
        </div>
      </div>
      <div className="text-gray-300 w-[5vw] text-[0.9rem] self-start">
        {props.date}
      </div>
    </div>
  );
}

export default NewsTicker;
