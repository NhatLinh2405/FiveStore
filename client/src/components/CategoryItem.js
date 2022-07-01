import React from "react";
import { Link } from "react-router-dom";
export default function CategoryItem({ item }) {
    return (
        <div>
            <div className="cateItem-container">
                <Link to={`products/${item.cat}`}>
                    <>
                        <img className="cateItem-img" src={item.img} alt="" />
                    </>

                    <div className="cateItem-info">
                        <h1 className="cateItem-Title">{item.title}</h1>
                        <button className="cateItem-button ">Shop Now</button>
                    </div>
                </Link>
            </div>
        </div>
    );
}
