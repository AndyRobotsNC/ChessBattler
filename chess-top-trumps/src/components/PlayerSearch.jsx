import React, { useState, ChangeEvent } from "react";

const PlayerSearch = ({ setPlayer }) => {
  const [playerTextBox, setPlayerTextBox] = useState("");

  const handleSubmit = (event) => {
    setPlayer(playerTextBox);
    setPlayerTextBox("");
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setPlayerTextBox(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> username </label>
        <input
          className="textBox"
          type="text"
          onChange={handleChange}
          value={playerTextBox}
        />
        <button>submit</button>
      </form>
    </div>
  );
};
export default PlayerSearch;
