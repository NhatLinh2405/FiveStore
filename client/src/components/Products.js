import React from "react";
import { popularProducts } from "../data/data";
import Product from "./Product";

export default function Products() {
    return (
        <div className="products-container">
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </div>
    );
}
