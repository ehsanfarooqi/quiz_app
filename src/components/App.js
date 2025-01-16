import { useReducer } from "react";
import data from "../components/questions";

// import all images of my app
import logo from "../images/logo512.png";
import javaScript from "../images/javascript.png";
import html from "../images/html.png";
import python from "../images/python.png";
import cPlus from "../images/cplus.png";
import java from "../images/java.png";

import Main from "./Main";
import StartScreen from "./StartScreen";
import Header from "./Header";
import Question from "./Question";
import Progress from "./Progress";
import NexButton from "./NexButton";
import Footer from "./Footer";
import Exit from "./Exit";
import FinishedScreen from "./FinishedScreen";

const myImages = [logo, javaScript, html, python, cPlus, java];

const initialState = {
  questions: [],
  indexOfImage: null,
  status: "",
  index: 0,
  answer: null,
  points: 0,
  secondsRemaining: 0,
};

const SECOND_PER_QUESTION = 1;

function reducer(state, { type, payloads }) {
  switch (type) {
    case "start":
      const newQuestions =
        payloads === 0
          ? data.react
          : payloads === 1
          ? data.javaScript
          : payloads === 2
          ? data.html
          : payloads === 3
          ? data.python
          : payloads === 4
          ? data.cPlus
          : data.java;
      return {
        ...state,
        questions: newQuestions,
        status: "active",
        indexOfImage: payloads,
        secondsRemaining: newQuestions.length * SECOND_PER_QUESTION,
      };
    case "newAnswer":
      const curQuestion = state.questions[state.index];
      return {
        ...state,
        answer: payloads,
        points:
          payloads === curQuestion.correctOption
            ? state.points + curQuestion.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "exit":
      return initialState;

    case "finished":
      return {
        ...state,
        status: "finished",
      };
    case "tick":
      if (!state.secondsRemaining) {
        return {
          ...state,
          status: "finished",
        };
      }
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
      };
    default:
      throw new Error("Action unkonwn");
  }
}

export default function App() {
  const [
    {
      questions,
      status,
      indexOfImage,
      index,
      answer,
      points,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((acc, cur) => acc + cur.points, 0);

  return (
    <div className="app">
      <Main>
        {status === "" && (
          <>
            <h1>Are you ready to Challenge yourself?</h1>
            <StartScreen myImages={myImages} dispatch={dispatch} />
          </>
        )}
        {status === "active" && (
          <>
            <Header
              myImages={myImages}
              indexOfImage={indexOfImage}
              dispatch={dispatch}
              secondsRemaining={secondsRemaining}
            />
            <Progress
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              index={index}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <NexButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
              <Exit dispatch={dispatch} />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishedScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
