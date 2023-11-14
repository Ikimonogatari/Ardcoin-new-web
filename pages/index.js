import { useEffect } from "react";

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

    const initialText = "Coming soon...";
    let currentText = initialText;
    let characterCount = 0;
    const characterSpeed = 100;
    const resetInterval = 5000; // Adjust this value to change the interval for resetting the text

    let characterCountIncreaseInterval = setInterval(
      characterCountIncrease,
      characterSpeed
    );

    function characterCountIncrease() {
      if (characterCount === currentText.length) {
        clearInterval(characterCountIncreaseInterval);
        setTimeout(resetText, resetInterval);
      }
      characterCount++;
    }

    function resetText() {
      currentText = initialText;
      characterCount = 0;
      characterCountIncreaseInterval = setInterval(
        characterCountIncrease,
        characterSpeed
      );
    }

    const setRandomTextInterval = setInterval(setRandomText, 50);

    function getRandomText() {
      let result = "";

      if (characterCount === 0) {
        for (let i = 0; i < initialText.length; i++) {
          let randomCharacter =
            characterCollection[
              Math.floor(Math.random() * characterCollection.length)
            ];
          result += randomCharacter;
        }
      } else {
        result = currentText.slice(0, characterCount);

        for (let i = 0; i < initialText.length - characterCount; i++) {
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

    return () => {
      clearInterval(characterCountIncreaseInterval);
      clearInterval(setRandomTextInterval);
    };
  }, []);
  return (
    <main className="w-full h-screen relative flex justify-center items-center overflow-hidden">
      <img
        className="absolute h-full w-full z-0 hidden sm:block"
        src="/bg.webp"
      />
      <img
        className="absolute h-full w-full object-cover z-0 block sm:hidden"
        src="/bgmobile.webp"
      />

      <div className="absolute bg-[#051d20] z-10 w-full h-full opacity-90"></div>
      <img
        src="logowhite.png"
        loading="lazy"
        className="absolute top-8 sm:top-[80px] h-[30px] sm:h-[50px] lg:h-[60px] z-50"
      />
      <img
        src="gradbg-min.png"
        loading="lazy"
        className="absolute bottom-0 w-full z-50 opacity-70 h-1/6 mx-auto hidden md:block object-cover transition-opacity duration-1000 ease-in-out animate-descend"
      />
      <img
        src="gradbgmobile-min.png"
        loading="lazy"
        className="absolute bottom-0 w-full z-50 opacity-70 h-1/6 mx-auto block md:hidden object-cover transition-opacity duration-1000 ease-in-out"
      />

      <div className="flex flex-col text-black text-3xl hover:text-[36px] sm:text-7xl sm:hover:text-[80px] transition-all duration-500 items-center justify-center font-bold z-20">
        <span className="text-[#aaf082] ">Ardcoin 3.0</span>
        <div className="flex items-center text-center text-white mt-3 sm:mt-5 text-base sm:text-2xl font-normal">
          <div id="text" className="mr-2">
            Centralized
          </div>
          <div id="text">
            <span>to Decentralized</span>
          </div>
        </div>
        <div className="-bottom-20 effect-text-container">
          <span className="text-xs sm:text-2xl font-normal rounded-[4px] sm:rounded-lg border-white/10 bg-[#09282d] text-white border-[1px] px-3 sm:px-4 py-2 sm:py-3">
            Coming soon...
          </span>
        </div>
      </div>
    </main>
  );
}
