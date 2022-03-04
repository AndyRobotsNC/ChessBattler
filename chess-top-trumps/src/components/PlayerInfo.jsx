import { useEffect, useState } from "react";
import { chessUser } from "../utils/api";

const PlayerInfo = ({ playerArray }) => {
  const [player1Info, setPlayer1Info] = useState({});
  const [player2Info, setPlayer2Info] = useState({});

  useEffect(() => {
    if (playerArray.length > 1) {
      chessUser(playerArray[0]).then((data) => {
        setPlayer1Info(data);
      });
      chessUser(playerArray[1]).then((data) => {
        setPlayer2Info(data);
      });
    }
  }, [playerArray]);

  console.log(player1Info);
  console.log(player2Info);

  return <div>{player1Info.followers}</div>;
};

export default PlayerInfo;
