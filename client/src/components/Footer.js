import React from "react";

import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-left ">
                <h1 className="footer-logo ">FIVE</h1>
                <p className="footer-desc">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                </p>
                <div className="footer-socialContainer">
                    <a
                        href="https://www.facebook.com/lays.linh.96"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-socialIcon blue"
                    >
                        <BsFacebook />
                    </a>
                    <div className="footer-socialIcon">
                        <AiFillGithub />
                    </div>
                </div>
            </div>
            <div className="footer-center">
                <h3 className="footer-title">Quick Links</h3>
                <ul className="footer-list">
                    <li className="footer-listItem">Home</li>
                    <li className="footer-listItem">Cart</li>
                    <li className="footer-listItem">Man Fashion</li>
                    <li className="footer-listItem">Woman Fashion</li>
                    <li className="footer-listItem">Accessories</li>
                    <li className="footer-listItem">My Account</li>
                    <li className="footer-listItem">Order Tracking</li>
                    <li className="footer-listItem">Wishlist</li>
                    <li className="footer-listItem">Terms</li>
                </ul>
            </div>
            <div className="footer-right">
                <h3 className="footer-title">Contact</h3>
                <div className="footer-contactItem">
                    <FaMapMarkerAlt />
                    <p className="ml-10">Bạc Liêu</p>
                </div>
                <div className="footer-contactItem">
                    <AiFillPhone />
                    <p className="ml-10">0916030512</p>
                </div>
                <div className="footer-contactItem">
                    <GrMail />
                    <p className="ml-10">nhatlinh240501@gmail.com</p>
                </div>
                <img
                    className="footer-payment"
                    src="https://i.ibb.co/Qfvn4z6/payment.png"
                    alt=""
                />
            </div>
        </div>
    );
}
