import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function Product({ item }) {
    return (
        <div className="product-container">
            <div>
                <img className="product-img" src={item.img} alt="" />
            </div>
            <div className="product-Info">
                <div className="product-icon">
                    <ShoppingCartOutlinedIcon />
                </div>
                <div className="product-icon">
                    <SearchOutlinedIcon />
                </div>
                <div className="product-icon">
                    <FavoriteBorderOutlinedIcon />
                </div>
            </div>
        </div>
    );
}
