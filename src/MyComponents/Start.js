import React from "react";
import "./Start.css";
import img1 from "../MyComponents/images/Frame.png";

export default function Start({ gameStart, setGameStart }) {
  return (
    <div className="main">
      <header className="main-header">
        <img src={img1} className="main-logo" alt="logo" />
      </header>

      <div className="container">
        <div className="circle">Quiz</div>
      </div>

      <div className="grid-btn">
        <button className="btn" onClick={() => setGameStart(!gameStart)}>
          Start
        </button>
      </div>
    </div>
  );
}
