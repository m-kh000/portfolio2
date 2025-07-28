import React, { useEffect, useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Load theme from localStorage on first render
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    // Apply dark mode class to <body>
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="flex-row">
      <div className="flex-col max-w-[min(40vw,300px)] m-0 px-2 pt-10 bg-amber-50 dark:bg-zinc-900 h-full rounded text-center text-black dark:text-white">
        <button
          onClick={toggleMode}
          className="icon rounded-b-full"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <img src="/moon.png" alt="Moon Icon" className="inline-block icon" />
          ) : (
            <img src="/sun.png" alt="Sun Icon" className="inline-block icon" />
          )}
        </button>

        <br />
        <br />
        <h1>
          a little bit <br /> about myself
        </h1>
        <br />
        <div className="text-left">
          <p>courses I've completed </p>
          <br />
          <ul>
            <li>
              <img src="/ai.png" className="icon inline-block" />
              <p>AWS Educate machine learning foundations</p>
            </li>
            <li>
              <img src="/ai.png" className="icon inline-block" />
              <p>Introducing Generative AI with AWS</p>
            </li>
            <li>
              <img src="/ai.png" className="icon inline-block" />
              <p>Object Oriented Programming in Java – Duke University</p>
            </li>
            <li>
              <img src="/ai.png" className="icon inline-block" />
              <p>CS50 Harvard</p>
            </li>
            <li>
              <img src="/paint.png" className="icon inline-block" />
              <p>Fundamentals of Graphic Design – CalArts</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
