import React from "react";

export default function Register() {
    return (
        <div className="reg-container ">
            <div className="reg-wrapper">
                <div className="reg-title">CREATE AN ACCOUNT</div>
                <form action="" className="reg-form">
                    <input
                        type="text"
                        placeholder="full name"
                        className="reg-input"
                    />
                    <input
                        type="text"
                        placeholder="username"
                        className="reg-input"
                    />
                    <input
                        type="text"
                        placeholder="email"
                        className="reg-input"
                    />
                    <input
                        type="text"
                        placeholder="password"
                        className="reg-input"
                    />
                    <input
                        type="text"
                        placeholder="confirm password"
                        className="reg-input"
                    />
                    <span className="reg-agreement">
                        By creating an account, I consent to the processing of
                        my personal data in accordance with the 
                        <b> PRIVACY POLICY</b>
                    </span>
                    <button className="reg-button">Create</button>
                </form>
            </div>
        </div>
    );
}
