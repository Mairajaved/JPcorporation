import React from 'react';
import '../styles/Send.css';
import plane from '../assets/plane.png'

function Send() {
    return (
        <div>
            <button className="noselect">
                <span className="text">Send</span>
                <span className="icon">
                    <img src={plane} width="24" height="24" alt="Send icon" />
                </span>
            </button>
        </div>
    );
}

export default Send;
