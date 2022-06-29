import React from "react";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

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
                        <SearchIcon className="nav-search" />
                    </div>
                </div>
                <div className="nav-center">
                    <span className="nav-logo">FIVE</span>
                </div>
                <div className="nav-right">
                    <div className="nav-menuItem">REGISTER</div>
                    <div className="nav-menuItem">SIGN IN</div>
                    <div className="nav-menuItem">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
