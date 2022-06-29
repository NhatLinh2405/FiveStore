import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "./../components/Footer";

export default function ProductList() {
    return (
        <>
            <Announcement />
            <Navbar />
            <h1 className="products-title">Dresses</h1>
            <div className="products-filterContainer">
                <div className="products-filter">
                    <span className="products-filterText">
                        Filter Products:
                    </span>
                    <select
                        defaultValue=""
                        className="products-select"
                        name=""
                        id=""
                    >
                        <option value="" disabled>
                            Color
                        </option>
                        <option value="">White</option>
                        <option value="">Black</option>
                        <option value="">Blue</option>
                        <option value="">Yellow</option>
                        <option value="">Green</option>
                    </select>
                    <select
                        defaultValue=""
                        className="products-select"
                        name=""
                        id=""
                    >
                        <option value="" disabled>
                            Size
                        </option>
                        <option value="">S</option>
                        <option value="">M</option>
                        <option value="">L</option>
                        <option value="">XL</option>
                        <option value="">XXL</option>
                    </select>
                </div>
                <div className="products-filter">
                    <span className="products-filterText">Sort Products:</span>
                    <select
                        defaultValue=""
                        className="products-select"
                        name=""
                        id=""
                    >
                        <option value="DEFAULT">Newest</option>
                        <option value="">Price (asc)</option>
                        <option value="">Price (desc)</option>
                    </select>
                </div>
            </div>
            <Products />
            <Newsletter />
            <Footer />
        </>
    );
}
