import { useQuiz } from "../context/QuizContext";

function Progress() {
  const { numQuestions, points, maxPossiblePoints, index, answer } = useQuiz();
  return (
    <div className="progress">
      <progress max={numQuestions} value={index + 1}>
        {points}
      </progress>
      <p>
        Questions: <strong>{index + 1}</strong>/ {numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </div>
  );
}

export default Progress;
