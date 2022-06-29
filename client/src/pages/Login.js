import React from "react";

export default function Login() {
    return (
        <div className="log-container">
            <div className="log-wrapper">
                <div className="log-title">SIGN IN</div>
                <form action="" className="log-form">
                    <input
                        type="text"
                        placeholder="username"
                        className="log-input"
                    />
                    <input
                        type="text"
                        placeholder="password"
                        className="log-input"
                    />
                    <button className="log-button">LOGIN</button>
                    <a href="/" className="log-link">
                        DO NOT YOU REMEMBER THE PASSWORD?
                    </a>
                    <a href="/" className="log-link">
                        CREATE A NEW ACCOUNT
                    </a>
                </form>
            </div>
        </div>
    );
}
