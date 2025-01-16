function Progress({ numQuestions, points, maxPossiblePoints, index, answer }) {
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
