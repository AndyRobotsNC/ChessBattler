import { useEffect, useState } from "react";
import { chessUser } from "../utils/api";
import PlayerCard from "./PlayerCard";

const PlayerInfo = ({ playerArray }) => {
  const [playersArray, setPlayersArray] = useState([]);

  useEffect(() => {
    if (playerArray.length === 2) {
      chessUser(playerArray[0]).then((data) => {
        setPlayersArray((currArr) => [...currArr, data]);
      });
      chessUser(playerArray[1]).then((data) => {
        setPlayersArray((currArr) => [...currArr, data]);
      });
    }
  }, [playerArray]);

  console.log(playersArray);

  return (
    <div>
      {playersArray.map((user) => {
        return <PlayerCard user={user} />;
      })}
    </div>
  );
};

export default PlayerInfo;
