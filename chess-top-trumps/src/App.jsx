import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PlayerSearch from "./components/PlayerSearch";
import PlayerInfo from "./components/PlayerInfo";

function App() {
  const [player, setPlayer] = useState("");

  return (
    <div className="App">
      <Header />
      <PlayerSearch setPlayer={setPlayer} />
      <PlayerInfo player={player} />
    </div>
  );
}

export default App;
