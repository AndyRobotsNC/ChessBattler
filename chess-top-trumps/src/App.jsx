import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PlayerSearch from "./components/PlayerSearch";
import PlayerInfo from "./components/PlayerInfo";

function App() {
  const [playerArray, setPlayerArray] = useState([]);

  return (
    <div className="App">
      <Header />
      <PlayerSearch setPlayerArray={setPlayerArray} playerArray={playerArray} />
      <PlayerInfo playerArray={playerArray} />
    </div>
  );
}

export default App;
