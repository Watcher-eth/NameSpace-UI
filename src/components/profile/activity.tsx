import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";

function Activity() {
  //TODO: Fetch Portfolio
  const portfolio = [
    { name: "DOGE", img: "", rank: 3, value: 111 },
    { name: "FROG", img: "", rank: 15, value: 22 },
    { name: "PEPE", img: "", rank: 4, value: 28 },
    { name: "SHIBA", img: "", rank: 22, value: 52 },
    { name: "DEGEN", img: "", rank: 43, value: 38 },
    { name: "CATWIFHAT", img: "", rank: 13, value: 10 },
    { name: "LIWIFHAT", img: "", rank: 17, value: 120 },
  ];

  return (
    <div className="grid grid-cols-4 bg-[#0E0E0E] gap-4 flex-grow">
      {portfolio.map((item, index) => {
        return (
          <div className="bg-[#1B1B1B] h-[18vw] w-[18vw] flex flex-col justify-end rounded-2xl relative">
            <Image layout="fill" src={item.img} alt="Coin Image" />
            <Badge variant="secondary" className=" absolute top-4 right-4">
              {item.name}
            </Badge>
            <div className=" p-3 bg-gray-800/[0.2] rounded-b-2xl backdrop-blur-xl">
              <div className="flex justify-between ">
                <span>Rank</span> <span>Value</span>
              </div>
              <div className="flex justify-between">
                <span>{item.rank}</span>
                <span>{item.value}Ξ</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Activity;
