import { useQuiz } from "../context/QuizContext";

function NexButton() {
  const { dispatch, answer, index, numQuestions } = useQuiz();
  if (answer === null) return answer;

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-rght"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-rght"
        onClick={() => dispatch({ type: "finished" })}
      >
        Finished
      </button>
    );
}

export default NexButton;
