import { useState } from "react";
import ChatPanel from "./ChatPanel";
import ParticipantsPanel from "./ParticipantsPanel";
import "../style/Poll.css";

const LivePoll = () => {
  const poll = JSON.parse(localStorage.getItem("livePoll"));

  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");

  if (!poll) return <h2 style={{ padding: "40px" }}>No active poll</h2>;

  const totalVotes = poll.options.reduce(
    (sum, opt) => sum + (opt.votes || 0),
    0
  );

  return (
    <div className="dashboard">
      {/* LEFT : POLL CARD */}
      <div className="poll-card">
        <h4>Question</h4>

        <div className="question-header">
          {poll.question}
        </div>

        {poll.options.map((opt, i) => {
          const percent = totalVotes
            ? Math.round(((opt.votes || 0) / totalVotes) * 100)
            : 0;

          return (
            <div className="option" key={i}>
              <div
                className="fill"
                style={{ width: `${percent || 10}%` }}
              >
                <span className="badge">{i + 1}</span>
                {opt.text}
              </div>

              <span className="percent">{percent}%</span>
            </div>
          );
        })}

        <button className="ask-btn">+ Ask a new question</button>
      </div>

      {/* FLOATING CHAT BUTTON */}
      <button
        className="chat-fab"
        onClick={() => setIsPanelOpen(!isPanelOpen)}
      >
        💬
      </button>

      {/* RIGHT PANEL */}
      {isPanelOpen && (
        <div className="side-panel">
          {/* TABS */}
          <div className="tabs">
            <span
              className={activeTab === "chat" ? "active" : ""}
              onClick={() => setActiveTab("chat")}
            >
              Chat
            </span>

            <span
              className={activeTab === "participants" ? "active" : ""}
              onClick={() => setActiveTab("participants")}
            >
              Participants
            </span>
          </div>

          {/* CONTENT */}
          {activeTab === "chat" && <ChatPanel />}
          {activeTab === "participants" && <ParticipantsPanel />}
        </div>
      )}
    </div>
  );
};

export default LivePoll;