import { useQuiz } from "../context/QuizContext";

function Exit() {
  const { dispatch } = useQuiz();
  return (
    <button className="btn" onClick={() => dispatch({ type: "exit" })}>
      Exit
    </button>
  );
}

export default Exit;
