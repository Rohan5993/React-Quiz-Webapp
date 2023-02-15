import React from "react";
import Start from "./MyComponents/Start";
import Question from "./question";

function App() {
  const [gameStart, setGameStart] = React.useState(false);

  return (
    <div id="mainContainer">
      {gameStart === false ? (
        <Start gameStart={gameStart} setGameStart={setGameStart} />
      ) : (
        <Question />
      )}
    </div>
  );
}

export default App;
