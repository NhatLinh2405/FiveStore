import React from "react";
import { AiOutlineSend } from "react-icons/ai";

export default function Newsletter() {
    return (
        <div className="new-container">
            <h1>Have any question?</h1>
            <h3 className="new-desc">please send to my email</h3>
            <div className="new-inputContainer ">
                <input
                    className="new-input"
                    type="text"
                    placeholder="Your email"
                />
                {/* <button className="new-button">
                    <a href="mailto:nhatlinh240501@gmail.com">
                        <SendOutlinedIcon />
                    </a>
                </button> */}
                <button className="new-button">
                    <AiOutlineSend className="normal" />
                </button>
            </div>
        </div>
    );
}
