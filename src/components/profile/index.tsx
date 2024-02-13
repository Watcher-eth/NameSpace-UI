/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CaqGyYjyElU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Portfolio from "./portfolio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Activity from "./activity";
import Liquidty from "./liquidty";
import { Pen } from "lucide-react";

export default function Profile() {
  //TODO: get holdings

  return (
    <div className="bg-[#0E0E0E] min-h-screen w-[100vw] text-white">
      <main className="px-4 py-8">
        <section className="flex gap-8">
          <div className="flex flex-col pl-7 items-start">
            <Avatar className="mb-4 h-[9rem] w-[9rem]">
              <AvatarImage
                alt="Jesse Pollack"
                src="https://pbs.twimg.com/profile_images/1484575656759472128/4vLR6_4F_400x400.png"
              />
            </Avatar>
            <h1 className="text-3xl font-bold">Jesse Pollack</h1>
            <p className="text-gray-400">0xersh...3rf</p>
            <p className="text-gray-400 mb-4">
              Your detailed description goes here...
            </p>
            <Button
              className="mb-4 flex items-center text-gray-900"
              variant="outline"
            >
              <Pen
                strokeWidth={3}
                className="stroke-gray-900 mr-1 h-[0.8rem] w-[0.8rem]"
              />{" "}
              <div>Edit Profile</div>
            </Button>
            <div className="flex space-x-2">
              <GithubIcon className="text-gray-400" />
              <LinkedinIcon className="text-gray-400" />
              <TwitterIcon className="text-gray-400" />
            </div>
          </div>
          <Tabs defaultValue="Portfolio" className="w-[77vw]">
            <TabsList className="mb-4">
              <TabsTrigger value="Portfolio" className="pr-3">
                Portfolio
              </TabsTrigger>
              <TabsTrigger value="Activity" className="pr-3">
                Activity
              </TabsTrigger>
              <TabsTrigger value="Liquidity" className="pr-3">
                Liquidity
              </TabsTrigger>
              <TabsTrigger value="Common">Common Tokens</TabsTrigger>
            </TabsList>
            <TabsContent value="Portfolio">
              <Portfolio />
            </TabsContent>
            <TabsContent value="Activity">
              <Activity />{" "}
            </TabsContent>
            <TabsContent value="Liquidity">
              <Liquidty />
            </TabsContent>
            <TabsContent value="Common">Change your password here.</TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
