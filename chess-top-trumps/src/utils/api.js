const axios = require("axios");

const apiRequest = axios.create({
  baseURL: "https://api.chess.com/pub/player",
});

export const chessUser = (username) => {
  return apiRequest.get(`/${username}`).then((data) => {
    return data.data;
  });
};
