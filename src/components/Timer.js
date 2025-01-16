import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const SECOND = Math.floor(secondsRemaining % 60);
  const MINUTS = Math.floor(secondsRemaining / 60);
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [dispatch]);
  return (
    <p className={`timer ${secondsRemaining < 8 ? "worning" : ""}`}>
      {MINUTS < 10 && "0"}
      {MINUTS}: {SECOND < 10 && "0"}
      {SECOND}
    </p>
  );
}

export default Timer;
