const PlayerCard = ({ user }) => {
  return (
    <div className="player-card" key={user.player_id}>
      <h2>{user.username.toUpperCase()}</h2>
      <img src={user.avatar} alt="" />
      <p>Account Type: {user.status}</p>
      <p>Followers: {user.followers}</p>
      <a href={user.url}>Profile</a>
    </div>
  );
};

export default PlayerCard;
