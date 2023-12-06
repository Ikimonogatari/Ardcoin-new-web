import { useEffect, useState } from "react";

function calculateTime() {
  const year = new Date().getFullYear(),
    difference = +new Date(`${year}-12-15`) - +new Date();
  let timeLeft = [];

  if (difference > 0) {
    timeLeft["days"] = Math.floor(difference / (1000 * 60 * 60 * 24));
    timeLeft["hours"] = Math.floor((difference / (1000 * 60 * 60)) % 24);
    timeLeft["minutes"] = Math.floor((difference / 1000 / 60) % 60);
    timeLeft["seconds"] = Math.floor((difference / 1000) % 60);
  }

  return timeLeft;
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(calculateTime());
  useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTime());
    }, 1000);
    return () => clearTimeout(id);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return true;
  });
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
      {/* <img
        src="logowhite.png"
        loading="lazy"
        className="absolute top-8 sm:top-[80px] h-[30px] sm:h-[50px] lg:h-[60px] z-50"
      /> */}
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
      <div className="flex flex-col transition-all duration-500 items-center justify-center font-bold z-20 container">
        {/* <span className="text-[#aaf082] ">Ardcoin 3.0</span> */}

        <img
          // src="logowhite.png"
          src="/ardcoinlogo.svg"
          loading="lazy"
          className="absolute top-8 z-50 sm:static h-[30px] sm:h-[50px] lg:h-[60px]"
        />

        <div className="mt-10">
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/8GsVa3aBmiE?rel=0&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-2xl sm:rounded-3xl mx-auto w-[354px] h-[200px] sm:w-[442px] sm:h-[250px] lg:w-[619.5px] lg:h-[350px]"
          ></iframe>
        </div>
        {timerComponents.length ? (
          <div className="mt-3 sm:mt-8 text-white font-normal grid grid-flow-col gap-2 sm:gap-4 text-center auto-cols-max rounded-[4px] sm:rounded-lg border-white/10 bg-[#09282d] border-[1px] px-2 sm:px-2 py-[6px] sm:py-2">
            <div className="flex flex-col text-xs sm:text-base">
              <span className="countdown text-2xl sm:text-3xl lg:text-4xl">
                <span style={{ "--value": timeLeft["days"] }}></span>
              </span>
              days
            </div>
            <div className="flex flex-col text-xs sm:text-base">
              <span className="countdown text-2xl sm:text-3xl lg:text-4xl">
                <span style={{ "--value": timeLeft["hours"] }}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col text-xs sm:text-base">
              <span className="countdown text-2xl sm:text-3xl lg:text-4xl">
                <span style={{ "--value": timeLeft["minutes"] }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col text-xs sm:text-base">
              <span className="countdown text-2xl sm:text-3xl lg:text-4xl">
                <span style={{ "--value": timeLeft["seconds"] }}></span>
              </span>
              sec
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="flex items-center text-center text-white mt-3 sm:mt-6 text-base sm:text-xl font-normal">
          <div id="text" className="mr-2">
            Centralized
          </div>
          <div id="text">
            <span>to Decentralized</span>
          </div>
        </div>
        <div className="effect-text-container mt-4 sm:mt-8">
          <span className="text-xs sm:text-xl font-normal rounded-[4px] sm:rounded-lg border-white/10 bg-[#09282d] text-white border-[1px] px-2 sm:px-4 py-[6px] sm:py-3">
            Coming soon...
          </span>
        </div>
      </div>
    </main>
  );
}
