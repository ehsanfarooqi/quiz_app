import { createContext, useContext, useReducer } from "react";

import data from "../components/questions";

// import all images of my app
import logo from "../images/logo512.png";
import javaScript from "../images/javascript.png";
import html from "../images/html.png";
import python from "../images/python.png";
import cPlus from "../images/cplus.png";
import java from "../images/java.png";

// import all sounds of my app
import answerSoundUrl from "../sound/correct-sound.mp3";
import wrongSoundUrl from "../sound/wrong-sound.wav";
import worningSound from "../sound/warningClock.wav";
const QuizContext = createContext();

// Images array
const myImages = [logo, javaScript, html, python, cPlus, java];

// create new Audio
const worning = new Audio(worningSound);
const correctSound = new Audio(answerSoundUrl);
const wrongSound = new Audio(wrongSoundUrl);

const initialState = {
  questions: [],
  indexOfImage: null,
  status: "",
  index: 0,
  answer: null,
  points: 0,
  secondsRemaining: 0,
};

const SECOND_PER_QUESTION = 30;

// Reducer function
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
      const isCorrect = payloads === curQuestion.correctOption;
      if (isCorrect) correctSound.play();
      else wrongSound.play();
      return {
        ...state,
        answer: payloads,
        points: isCorrect ? state.points + curQuestion.points : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "exit":
      worning.pause();
      return { ...initialState };

    case "finished":
      return {
        ...state,
        status: "finished",
      };
    case "tick":
      if (state.secondsRemaining < 9) worning.play();
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
function QuizProvider({ children }) {
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
    <QuizContext.Provider
      value={{
        questions,
        status,
        indexOfImage,
        index,
        answer,
        points,
        secondsRemaining,
        myImages,
        numQuestions,
        maxPossiblePoints,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };
