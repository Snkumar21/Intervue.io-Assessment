import React from "react";
import "../style/KickedOut.css";

const KickedOut = () => {
    return (
        <div className="container">
            <div className="badge">
                <span className="sparkle">✦</span>
                Intervue Poll
            </div>

            <h1 className="title">You’ve been Kicked out !</h1>

            <p className="subtitle">
                Looks like the teacher had removed you from the poll system.
                Please try again sometime.
            </p>
        </div>
    );
};

export default KickedOut;