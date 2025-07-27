import React from "react";
function App() {
  return (
    <div  className="flex-row ">
      <div className="flex-col max-w-[min(40vw,300px)] m-0 px-2 pt-10 bg-amber-50  h-full round text-center">
        <button
          className="rounded-4xl float"
          //onClick={() =>}
        >
          <img id="sun" src="src/sun.png" className="icon"></img>
        </button>
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

export default App;
