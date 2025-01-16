function FinishedScreen({ points, maxPossiblePoints, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;

  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <div>
      <h1>
        <span>🎉</span>Congratulations<span>🎉</span>
      </h1>
      <h2>You have successfully completed the quiz!</h2>
      <p className="result">
        <span>{emoji}</span> Your Scored {points} out of {maxPossiblePoints} (
        {percentage}%)
      </p>
      <button
        className="btn btn-reset"
        onClick={() => dispatch({ type: "exit" })}
      >
        Restart Game
      </button>
    </div>
  );
}

export default FinishedScreen;
