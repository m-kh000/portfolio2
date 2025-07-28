import React, { useEffect, useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("darkmode", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="flex">
      <div id="toolbar"className="flex-col max-w-[min(40vw,300px)] m-0 px-2 pt-10  h-full round text-center">
        <button
          id="mode"
          className=" rounded-b-full"
          aria-label={isDarkMode ? "lightmode" : "darkmode"}
          onClick={toggleMode}
        >
          {isDarkMode ? (
            <img src="/moon.png" alt="Moon" className="icon" />
          ) : (
            <img src="/sun.png" alt="Sun" className="icon" />
          )}
        </button>

        <br />
        <br />
        <h1>
          a little bit <br />
          about myself
        </h1>

        <br />
        <div className="text-left">
          <p>Courses I've completed</p>
          <br />
          <ul>
            <li className="flex items-start gap-2">
              <img src="/ai.png" className="icon " />
              <p>AWS Educate Machine Learning Foundations</p>
            </li>
            <li className="flex items-start gap-2">
              <img src="/ai.png" className="icon " />
              <p>Introducing Generative AI with AWS</p>
            </li>
            <li className="flex items-start gap-2">
              <img src="/ai.png" className="icon " />
              <p>Object Oriented Programming in Java - Duke University</p>
            </li>
            <li className="flex items-start gap-2">
              <img src="/ai.png" className="icon " />
              <p>CS50 - Harvard</p>
            </li>
            <li className="flex items-start gap-2">
              <img src="/paint.png" className="icon " />
              <p>Fundamentals of Graphic Design - CalArts</p>
            </li>
          </ul>
        </div>
      </div>
      <img src="1.png" className="img"/>
    </div>
  );
}

export default App;
