const users = [
  "Rahul Arora",
  "Pushpender Rautela",
  "Rijul Zalpuri",
  "Nadeem N",
  "Ashwin Sharma",
];

const ParticipantsPanel = () => (
  <div className="side-panel">
    <div className="tabs">
      <span>Chat</span>
      <span className="active">Participants</span>
    </div>

    {users.map((u, i) => (
      <div className="user-row" key={i}>
        <span>{u}</span>
        <span className="kick">Kick out</span>
      </div>
    ))}
  </div>
);

export default ParticipantsPanel;