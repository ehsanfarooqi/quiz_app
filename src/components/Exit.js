function Exit({ dispatch }) {
  return (
    <button className="btn" onClick={() => dispatch({ type: "exit" })}>
      Exit
    </button>
  );
}

export default Exit;
