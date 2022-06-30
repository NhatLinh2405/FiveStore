import React from "react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
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
                    <span className="nav-logo">FIVE</span>
                </div>
                <div className="nav-right">
                    <div className="nav-menuItem">REGISTER</div>
                    <div className="nav-menuItem">SIGN IN</div>
                    <div className="nav-menuItem content">
                        {/* <Badge badgeContent={4} color="primary">
                        </Badge> */}
                        <div className="nav-amount">1</div>
                        <AiOutlineShoppingCart className="big" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
