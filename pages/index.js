import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full h-screen relative flex justify-center items-center bg-white">
      {/* <img className="absolute h-full w-full z-0" src="/bg.webp" /> */}
      {/* <div className="absolute bg-[#051d20] z-10 w-full h-full opacity-90"></div> */}
      <img src="logo.png" className="absolute top-10 left-10 h-10" />
      <div className="flex flex-col text-black text-2xl hover:text-[36px] sm:text-7xl sm:hover:text-[84px] transition-all duration-500 items-center justify-center font-bold z-20">
        <span className="">Шинэчлэгдсэн</span>
        <span className="text-[#aaf082] ">Ардкойн 3.0</span>
        <span className="mt-4 text-base sm:text-2xl font-normal rounded-md sm:rounded-lg border-[#223e42] border-[1px] px-2 sm:px-3 py-1 bg-black/5">
          Тун удахгүй
        </span>
        <div className="flex items-center mt-5 text-base sm:text-3xl font-normal">
          <div id="text" className="mr-2">
            Centralized
          </div>
          <div id="text">
            <span>to Decentralized</span>
          </div>
        </div>
      </div>
    </main>
  );
}
