import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "./../components/Footer";

import { IoIosRemoveCircle, IoMdAddCircle } from "react-icons/io";

export default function DetailProduct() {
    const [qty, setQty] = useState(1);
    const increaseQty = () => {
        setQty(qty + 1);
    };
    const decreaseQty = () => {
        setQty(qty - 1);
    };
    return (
        <>
            <Navbar />
            <Announcement />
            <div className="detail-wrapper">
                <div className="detail-imgContainer">
                    <img
                        className="detail-img"
                        src="https://i.ibb.co/S6qMxwr/jean.jpg"
                        alt=""
                    />
                </div>
                <div className="detail-infoContainer">
                    <h1 className="detail-title">Denim Jumpsuit</h1>
                    <p className="detail-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec venenatis, dolor in finibus malesuada, lectus
                        ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla
                        fermentum vestibulum ex, eget tristique tortor pretium
                        ut. Curabitur elit justo, consequat id condimentum ac,
                        volutpat ornare.
                    </p>
                    <span className="detail-price">$ 20</span>
                    <div className="detail-filterContainer">
                        <div className="detail-filter">
                            <span className="detail-filterTitle">Color</span>
                            <div className="detail-filterColor bgBlue"></div>
                            <div className="detail-filterColor bgRed"></div>
                            <div className="detail-filterColor bgGreen"></div>
                        </div>
                        <div className="detail-filter">
                            <span className="detail-filterTitle">Size</span>
                            <select
                                className="detail-filterSize"
                                defaultValue=""
                                name=""
                                id=""
                            >
                                <option
                                    value=""
                                    disabled
                                    className="detail-filterSizeOption"
                                >
                                    S
                                </option>
                                <option
                                    value=""
                                    className="detail-filterSizeOption"
                                >
                                    M
                                </option>
                                <option
                                    value=""
                                    className="detail-filterSizeOption"
                                >
                                    L
                                </option>
                                <option
                                    value=""
                                    className="detail-filterSizeOption"
                                >
                                    XL
                                </option>
                                <option className="detail-filterSizeOption">
                                    XXL
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="detail-addContainer">
                        <div className="detail-amountContainer">
                            <button
                                className="border normal"
                                onClick={decreaseQty}
                            >
                                <IoIosRemoveCircle />
                            </button>

                            <span className="detail-amount">{qty}</span>
                            <div
                                className="border normal"
                                onClick={increaseQty}
                            >
                                <IoMdAddCircle />
                            </div>
                        </div>
                        <button className="detail-button">Add To Cart</button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </>
    );
}
