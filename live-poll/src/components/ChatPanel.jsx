const ChatPanel = () => {
  return (
    <div className="side-panel">
      <div className="tabs">
        <span className="active">Chat</span>
        <span>Participants</span>
      </div>

      <div className="chat-body">
        <div className="msg left">Hey there, how can I help?</div>
        <div className="msg right">Nothing bro.. just chill!!</div>
      </div>
    </div>
  );
};

export default ChatPanel;