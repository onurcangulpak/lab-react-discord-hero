import { useState } from "react";
import discordImg from "../img/1.png";
import menuButton from "../img/2.png";
import mainPicture from "../img/3.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <img src={discordImg} alt="discordImg" className="discord"></img>
        <img src={menuButton} alt="menuButton" className="menuButton"></img>
      </nav>
      <header className="header">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can beong to a school club,a gaming group, or a worldwide
          art communtiy. Where just you and a handful of friends can spend time
          together. A place that makes it easy to talk every day and hangout
          more ofter.
        </p>
        <div className="div-buttons">
          <button className="hero-button1">Download for Mac</button>
          <button className="hero-button2">Open Discord in your browser</button>
        </div>
        <img src={mainPicture} alt="main-picture" className="main-pic"></img>
      </header>
    </div>
  );
}

export default App;
