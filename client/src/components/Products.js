import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

export default function Products({ cat, filters, sort }) {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `http://localhost:5000/api/products?category=${cat}`
                        : "http://localhost:5000/api/products"
                );
                setProducts(res.data);
            } catch (err) {}
        };
        getProducts();
    }, [cat]);

    useEffect(() => {
        cat &&
            setFilterProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, cat, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilterProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilterProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilterProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);

    return (
        <div className="products-container">
            {cat
                ? filterProducts.map((item) => (
                      <Product item={item} key={item._id} />
                  ))
                : products
                      .slice(0, 4)
                      .map((item) => <Product item={item} key={item._id} />)}
        </div>
    );
}
