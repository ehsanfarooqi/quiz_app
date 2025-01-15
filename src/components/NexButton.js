function NexButton({ dispatch }) {
  return (
    <button
      className="btn btn-rght"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NexButton;
