import React from "react";
function App() {
  return (
    <div id="boody" className="flex-row ">
      <div className="flex-col max-w-[min(40vw,300px)] m-0 px-2 pt-10 bg-amber-50  h-full round text-center">
          <button id="mode" className="icon rounded-b-full" aria-label="Toggle dark mode">
          <i id='sun' src="src/sun.png"></i>
          <i id='moon' src="src/moon.png"  className="display: none;"></i>
          </button>
        {/* <button
          className="rounded-4xl float"
          //onClick={() =>}
        >
          <img id="sun" src="src/sun.png" className="icon"></img>
        </button> */}
        <br /><br />
        <h1>
          a little bit <br></br>about myself
        </h1>
        <br />
        <div className="text-left">
          <p>courses I've completed </p>
          <br />
          <ul>
            <li>
              <img src="src/ai.png" className="icon" />
              <p>
                AWS Educate machine
                learning foundations
              </p>{" "}
            </li>{" "}
            <li>
              <img src="src/ai.png" className="icon" />
              <p>
                Introducing Generative
                AI with AWS
              </p>
            </li>{" "}
            <li>
              <img src="src/ai.png" className="icon" />
              <p>
                Object Oriented
                Programming in Java
                Specialization Duke
                University
              </p>
            </li>{" "}
            <li>
              <img src="src/ai.png" className="icon" />
              <p>CS50 Harvard</p>
            </li>{" "}
            <li>
              <img src="src/paint.png" className="icon" />
              <p>
                Fundamentals of Graphic
                Design California
                Institute of the Arts
              </p>
            </li>{" "}
          </ul>
        </div>
      </div>
    </div>
  );
}
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const modeToggle = document.getElementById('mode');
    const sunIcon = document.getElementById('sun');
    const moonIcon = document.getElementById('moon');

    if (!modeToggle) return;

    modeToggle.addEventListener('click', () => {
      document.body.classList.toggle('darkmode');

      const isDarkMode = document.body.classList.contains('darkmode');

      sunIcon.style.display = isDarkMode ? 'none' : 'inline-block';
      moonIcon.style.display = isDarkMode ? 'inline-block' : 'none';

      modeToggle.setAttribute('aria-label', isDarkMode ? 'lightmode' : 'darkmode');
      localStorage.setItem('darkMode', isDarkMode);
    });
  }, []);

  return (
    <div>
      <button id="mode">
        <span id="sun">☀️</span>
        <span id="moon" style={{ display: 'none' }}>🌙</span>
      </button>
      {/* Your other content */}
    </div>
  );
}

export default App;
