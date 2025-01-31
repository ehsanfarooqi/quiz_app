import { useQuiz } from "../context/QuizContext";
import Timer from "./Timer";

function Header() {
  const { myImages, indexOfImage, dispatch, secondsRemaining } = useQuiz();
  return (
    <div className="header">
      <header className="app-header">
        <img
          className={indexOfImage === 0 ? "react" : ""}
          src={myImages[indexOfImage]}
          alt="react logo"
        />
        <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
      </header>
    </div>
  );
}

export default Header;
