import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    return (
        <div className="nav-container">
            <div className="nav-wrapper">
                <div className="nav-left">
                    <div className="nav-language">EN</div>
                    <div className="nav-searchContainer">
                        <input
                            type="text"
                            placeholder="Search"
                            className="nav-input"
                        />
                        <AiOutlineSearch className="nav-search" />
                    </div>
                </div>

                <div className="nav-center">
                    <Link to="/" className="nav-logo">
                        FIVE
                    </Link>
                </div>
                <div className="nav-right">
                    <div className="nav-menuItem">REGISTER</div>
                    <div className="nav-menuItem">SIGN IN</div>
                    <Link to="/cart">
                        <div className="nav-menuItem content">
                            <div className="nav-amount">{quantity}</div>
                            <AiOutlineShoppingCart className="big" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
