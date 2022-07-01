import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "./../components/Footer";

export default function ProductList() {
    let location = useLocation();
    const cat = location.pathname.split("/")[2];

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };
    return (
        <>
            <Announcement />
            <Navbar />
            <h1 className="products-title">{cat}</h1>
            <div className="products-filterContainer">
                <div className="products-filter">
                    <span className="products-filterText">
                        Filter Products:
                    </span>
                    <select
                        defaultValue=""
                        className="products-select"
                        name="color"
                        id=""
                        onChange={handleFilters}
                    >
                        <option value="" disabled>
                            Color
                        </option>
                        <option>white</option>
                        <option>black</option>
                        <option>blue</option>
                        <option>yellow</option>
                        <option>green</option>
                    </select>
                    <select
                        defaultValue=""
                        className="products-select"
                        name="size"
                        id=""
                        onChange={handleFilters}
                    >
                        <option value="" disabled>
                            Size
                        </option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                </div>
                <div className="products-filter">
                    <span className="products-filterText">Sort Products:</span>
                    <select
                        defaultValue=""
                        className="products-select"
                        name=""
                        id=""
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value="newest">Newest</option>
                        <option value="asc">Price (asc)</option>
                        <option value="desc">Price (desc)</option>
                    </select>
                </div>
            </div>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </>
    );
}
