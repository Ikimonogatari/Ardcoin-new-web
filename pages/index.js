import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const characterCollection = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "R",
      "S",
      "T",
      "U",
      "V",
      "Y",
      "Z",
    ];
    let currentText = document.querySelector(
      ".effect-text-container span"
    ).textContent;
    let currentTextCollection = [];
    let characterCount = 0;
    const characterSpeed = 100;

    pushCurrentTextCharacters();

    function pushCurrentTextCharacters() {
      for (let i = 0; i < currentText.length; i++) {
        let currentCharacter = currentText.slice(i, i + 1);
        currentTextCollection.push(currentCharacter);
      }
    }

    const characterCountIncreaseInterval = setInterval(
      characterCountIncrease,
      characterSpeed
    );

    function characterCountIncrease() {
      if (characterCount === currentTextCollection.length) {
        clearInterval(characterCountIncreaseInterval);
      }
      characterCount++;
    }

    const setRandomTextInterval = setInterval(setRandomText, 50);

    function getRandomText() {
      let result = "";

      if (characterCount === 0) {
        for (let i = 0; i < currentTextCollection.length; i++) {
          let randomCharacter =
            characterCollection[
              Math.floor(Math.random() * characterCollection.length)
            ];
          result += randomCharacter;
        }
      } else {
        result = currentText.slice(0, characterCount);

        for (
          let i = 0;
          i < currentTextCollection.length - characterCount;
          i++
        ) {
          let randomCharacter =
            characterCollection[
              Math.floor(Math.random() * characterCollection.length)
            ];
          result += randomCharacter;
        }
      }

      return result;
    }

    function setRandomText() {
      let elements = document.querySelectorAll(".effect-text-container span");
      elements.forEach((el) => {
        el.textContent = getRandomText();
      });
    }
  }, []);
  return (
    <main className="w-full h-screen relative flex justify-center items-center bg-white">
      {/* <img className="absolute h-full w-full z-0" src="/bg.webp" /> */}
      {/* <div className="absolute bg-[#051d20] z-10 w-full h-full opacity-90"></div> */}
      <img
        src="logo.png"
        className="absolute top-8 sm:top-[80px] h-[60px] sm:h-[120px]"
      />

      <div className="flex flex-col text-black text-3xl hover:text-[36px] sm:text-7xl sm:hover:text-[84px] transition-all duration-500 items-center justify-center font-bold z-20">
        <span className="text-[#aaf082] ">Ардкойн 3.0</span>
        <div className="effect-text-container">
          <span className="text-xs   sm:text-xl font-normal rounded-md sm:rounded-lg border-[#223e42] border-[1px] px-2 sm:px-3 py-[3px] sm:py-2">
            Тун удахгүй
          </span>
        </div>

        <div className="flex items-center mt-3 sm:mt-5 text-base sm:text-4xl font-normal">
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
