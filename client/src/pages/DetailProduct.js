import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "./../components/Footer";

import { IoIosRemoveCircle, IoMdAddCircle } from "react-icons/io";
import { pubRequest } from "../utils/request";
import { addProduct } from "../Redux/CartRedux";

import { useDispatch } from "react-redux";

export default function DetailProduct() {
    let location = useLocation();
    const dispatch = useDispatch();

    const id = location.pathname.split("/")[2];

    const [product, setProduct] = useState({});
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await pubRequest.get("/products/find/" + id);
                setProduct(res.data);
            } catch {}
        };
        getProduct();
    }, [id]);

    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (type) => {
        type === "dec"
            ? quantity > 1 && setQuantity(quantity - 1)
            : setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        dispatch(
            addProduct({
                ...product,
                quantity,
                color,
                size,
            })
        );
    };

    return (
        <>
            <Announcement />
            <Navbar />
            <div className="detail-wrapper">
                <div className="detail-imgContainer">
                    <img
                        className="detail-img"
                        src={product.img}
                        alt={product.title}
                    />
                </div>
                <div className="detail-infoContainer">
                    <h1 className="detail-title">{product.title}</h1>
                    <p className="detail-desc">{product.desc}</p>
                    <span className="detail-price">$ {product.price}</span>
                    <div className="detail-filterContainer">
                        <div className="detail-filter">
                            <span className="detail-filterTitle">Color</span>
                            {product.color?.map((c) => (
                                <div
                                    key={c}
                                    onClick={() => setColor(c)}
                                    className={`detail-filterColor bg${c}`}
                                ></div>
                            ))}
                        </div>
                        <div className="detail-filter">
                            <span className="detail-filterTitle">Size</span>
                            <select
                                className="detail-filterSize"
                                defaultValue=""
                                name=""
                                id=""
                                onChange={(e) => setSize(e.target.value)}
                            >
                                {product.size?.map((s) => (
                                    <option key={s} value={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="detail-addContainer">
                        <div className="detail-amountContainer">
                            <button
                                className="border normal"
                                onClick={() => handleQuantity("dec")}
                            >
                                <IoIosRemoveCircle />
                            </button>

                            <span className="detail-amount">{quantity}</span>
                            <div
                                className="border normal"
                                onClick={() => handleQuantity("inc")}
                            >
                                <IoMdAddCircle />
                            </div>
                        </div>
                        <button
                            onClick={handleAddToCart}
                            className="detail-button"
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </>
    );
}
