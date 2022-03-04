const PlayerCard = ({ user }) => {
  return (
    <div key={user.player_id}>
      <h2>{user.username}</h2>
      <img src={user.avatar} />
    </div>
  );
};

export default PlayerCard;
