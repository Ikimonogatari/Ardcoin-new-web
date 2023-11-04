import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full h-screen relative flex justify-center items-center">
      <img className="absolute h-full w-full z-0" src="/bg.webp" />
      <div className="absolute bg-[#051d20] z-10 w-full h-full opacity-90"></div>
      <div className="flex flex-col text-7xl hover:text-[84px] transition-all duration-500 items-center justify-center font-bold z-20">
        <span className="">Шинэчлэгдсэн</span>
        <span className="text-[#aaf082] ">Ардкойн 3.0</span>
        <span className="mt-5 text-2xl font-normal rounded-xl border-white/10 p-3 bg-white/5">
          Decentralized
        </span>
      </div>
    </main>
  );
}
