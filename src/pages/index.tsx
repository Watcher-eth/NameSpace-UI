import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Profile from "@/components/profile";
import ActivityFeed from "@/components/activity/activityFeed";
import ActivityPage from "@/components/activity";
import CreateCoin from "@/components/create";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex  flex-col bg-black items-center justify-between  ${inter.className}`}
    >
      <ActivityPage />
    </main>
  );
}
