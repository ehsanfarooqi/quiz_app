import Timer from "./Timer";

function Header({ myImages, indexOfImage, dispatch, secondsRemaining }) {
  return (
    <div className="header">
      <header className="app-header">
        <img
          className={indexOfImage === 0 ? "react" : ""}
          src={myImages[indexOfImage]}
          alt="react logo"
        />
        <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
      </header>
    </div>
  );
}

export default Header;
