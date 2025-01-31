// import all Components of my app
import Main from "./Main";
import StartScreen from "./StartScreen";
import Header from "./Header";
import Question from "./Question";
import Progress from "./Progress";
import NexButton from "./NexButton";
import Footer from "./Footer";
import Exit from "./Exit";
import FinishedScreen from "./FinishedScreen";
import { useQuiz } from "../context/QuizContext";

export default function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Main>
        {status === "" && (
          <>
            <h1>Are you ready to Challenge yourself?</h1>
            <StartScreen />
          </>
        )}
        {status === "active" && (
          <>
            <Header />
            <Progress />
            <Question />
            <Footer>
              <NexButton />
              <Exit />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishedScreen />}
      </Main>
    </div>
  );
}
