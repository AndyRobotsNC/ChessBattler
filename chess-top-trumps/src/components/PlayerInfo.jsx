import { useEffect, useState } from "react";
import { chessUser } from "../utils/api";

const PlayerInfo = ({ player }) => {
  const [playerInfo, setPlayerInfo] = useState({});

  useEffect(() => {
    if (player !== "") {
      chessUser(player).then((data) => {
        setPlayerInfo(data);
      });
    }
  }, [player]);

  console.log(playerInfo);

  return <div>{playerInfo.followers}</div>;
};

export default PlayerInfo;
