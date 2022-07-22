import React from "react";
import { Link } from "react-router-dom";

import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiFillHeart,
} from "react-icons/ai";
export default function Product({ item }) {
  return (
    <div className="product-container">
      <Link to={`/product/${item._id}`}>
        <div>
          <img className="product-img" src={item.img} alt="" />
        </div>
        <div className="product-Info">
          <div className="product-icon">
            <AiOutlineShoppingCart className="normal" />
          </div>
          <div className="product-icon">
            <AiOutlineSearch className="normal" />
          </div>
          <div className="product-icon">
            <AiFillHeart className="normal" />
          </div>
        </div>
      </Link>
    </div>
  );
}
