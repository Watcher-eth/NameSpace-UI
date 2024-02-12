import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import React from "react";
import { Search, Plus } from "lucide-react";
import { motion } from "framer-motion";
function Navbar() {
  //TODO: Get profile / connected account

  return (
    <header className="flex items-center justify-between w-[100vw] px-5 p-4 bg-[#0E0E0E]">
      <div className="flex items-center space-x-4">
        <nav className="flex space-x-4">
          <Link
            className="text-white hover:text-gray-300 ml-8 text-[1.2rem] font-bold"
            href="#"
          >
            NameSpace
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4 mr-4">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.96 }}>
          <Search
            strokeWidth={4}
            className="text-white h-[2.8rem] w-[2.8rem] p-3 bg-[#242424] rounded-full"
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.96 }}>
          <Plus
            strokeWidth={4}
            className="text-white h-[2.8rem] w-[2.8rem] p-3 bg-[#242424] rounded-full"
          />
        </motion.div>
        <motion.div
          className="h-[2.8rem] w-[2.8rem] rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.96 }}
        >
          <Avatar className="h-[2.8rem] w-[2.8rem] rounded-full">
            <AvatarImage
              className="rounded-full"
              alt="User avatar"
              src="https://pbs.twimg.com/profile_images/1484575656759472128/4vLR6_4F_400x400.png"
            />
          </Avatar>
        </motion.div>
      </div>
    </header>
  );
}

export default Navbar;
