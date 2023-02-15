import "./question.css";
import React from "react";
import correctImg from "./MyComponents/images/correct.png"
import quesImg from "./MyComponents/images/ques.png"




const questions = [
  {
    title: "How do you judge what should be added in the next version of the app ?",
    variants: ["Data Analysis", "User's feedback", "Copy from similar product","Personal feeling"],
    correct: 0,
  },
  {
    title: "How do you judge what should be added in the next version of the app ?",
    variants:  ["Data Analysis", "User's feedback",],
    img: quesImg,
    correct: 1,
  },
  {
    title: "How do you judge what should be added in the next version of the app ?",
    variants: [
      "This is simple HTML",
      "This is function",
      "This is the same HTML, but with the ability to execute JS code",
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img
        alt="text"
        img src={correctImg}
      />
      <h2>
        {(correct/questions.length * 100).toFixed(2)}%
      </h2>
      <br/><br/>
      <h2>
        You have found {correct} out of {questions.length} questions
      </h2>
      <br/>
      <a href="/">
        <button>Try Again</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className="progress">
        <div
          style={{ width: percentage + "%" }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <br/>
      {question.img ? <img src={question.img} alt="ques img" width={300} height={300}></img> : <></>}
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <div id="background">
      <div id="backgr"></div>
      <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
      </div>
    </div>
  );
}

export default App;
