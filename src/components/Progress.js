function Progress({ numQuestions, points, sumQuestions, index, answer }) {
  return (
    <div className="progress">
      <progress max="15" value={index + Number(answer !== null)}>
        {points}
      </progress>
      <p>
        Questions: <strong>{index + 1}</strong>/ {numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{sumQuestions}
      </p>
    </div>
  );
}

export default Progress;
