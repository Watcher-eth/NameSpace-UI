import Navbar from "@/components/common/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col bg-[#0E0E0E]">
      <Navbar />
      <Component {...pageProps} />;
    </div>
  );
}
