import { Wallet } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { motion } from "framer-motion";
function YourPortfolio() {
  //TODO: Fetch Portfolio

  const tokens = [
    { name: "DOGE", own: 300, value: 0.234, percentage: 0.56 },
    { name: "PEPE", own: 130, value: 0.155, percentage: 2.34 },
    { name: "DEGEN", own: 420, value: 0.415, percentage: 4.89 },
  ];
  return (
    <div className="flex flex-col w-[25vw] ml-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-[-0.3rem]">
          <div className="text-white text-[1.2rem]">Your Portfolio</div>
          <div className="text-white text-[3.2rem]">0.0125Ξ</div>
        </div>
        <Wallet strokeWidth={2.5} className="stroke-white self-start" />
      </div>
      {tokens.map((item, index) => {
        return (
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.96 }}
            className="flex my-1 p-3 items-center w-[25vw] bg-[#2A2A2A]/[0.7] justify-between rounded-lg"
          >
            <div className="flex items-center">
              <Avatar>
                <AvatarImage src="" />
              </Avatar>
              <div className="flex flex-col space-y-0">
                <div className="text-white text-[0.9rem]">{item.name}</div>
                <div className="text-gray-300 text-[0.8rem]">
                  You own {item.own}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end mr-1">
              <div className="text-white text-[0.9rem]">{item.value}Ξ</div>
              <div className="text-green-500 text-[0.8rem]">
                {item.percentage}%
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default YourPortfolio;
