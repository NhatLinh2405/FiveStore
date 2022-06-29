import React from "react";
import CategoryItem from "./CategoryItem";
import { categories } from "../data/data";

export default function Categories() {
    return (
        <div className="cate-container">
            {categories.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </div>
    );
}
