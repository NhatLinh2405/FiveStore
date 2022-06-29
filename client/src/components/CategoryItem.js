import React from "react";

export default function CategoryItem({ item }) {
    return (
        <div>
            <div className="cateItem-container">
                <div>
                    <img className="cateItem-img" src={item.img} alt="" />
                </div>

                <div className="cateItem-info">
                    <h1 className="cateItem-Title">{item.title}</h1>
                    <button className="cateItem-button ">Shop Now</button>
                </div>
            </div>
        </div>
    );
}
