import React, { useState } from "react";

const PlayerSearch = ({ playerArray, setPlayerArray }) => {
  const [player1TextBox, setPlayer1TextBox] = useState("");
  const [player2TextBox, setPlayer2TextBox] = useState("");

  const handleSubmit = (event) => {
    setPlayerArray((playerArray) => [
      ...playerArray,
      player1TextBox,
      player2TextBox,
    ]);
    // setPlayer1TextBox("");
    // setPlayer2TextBox("");
    event.preventDefault();
  };

  const handlePlayer1Change = (event) => {
    const { value } = event.target;
    setPlayer1TextBox(value);
  };
  const handlePlayer2Change = (event) => {
    const { value } = event.target;
    setPlayer2TextBox(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Player 1 </label>
        <input
          className="textBox"
          type="text"
          onChange={handlePlayer1Change}
          value={player1TextBox}
        />
        <br />
        <label> Player 2 </label>
        <input
          className="textBox"
          type="text"
          onChange={handlePlayer2Change}
          value={player2TextBox}
        />
        <button>submit</button>
      </form>
    </div>
  );
};
export default PlayerSearch;
