function NexButton({ dispatch, answer, index, numQuestions }) {
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
