import React, { useState } from "react";

import { IoIosRemoveCircle, IoMdAddCircle } from "react-icons/io";

import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

export default function Cart() {
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
            <div className="cart-wrapper">
                <h1 className="cart-title">YOUR BAG</h1>
                <div className="cart-top">
                    <button className="cart-topButton">
                        CONTINUE SHOPPING
                    </button>
                    <div className="cart-topText">Shopping Bag (2)</div>
                    <div className="cart-topText">Your Wishlist (0)</div>
                    <button type="filled" className="cart-topButton">
                        CHECKOUT NOW
                    </button>
                </div>
                <div className="cart-bottom">
                    <div className="cart-info">
                        <div className="cart-product">
                            <div className="cart-productDetail">
                                <img
                                    className="cart-img"
                                    src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                                    alt=""
                                />
                                <div className="cart-details">
                                    <span>
                                        <b>Product:</b> JESSIE THUNDER SHOES
                                    </span>
                                    <span>
                                        <b>ID:</b> 93813718293
                                    </span>
                                    <div className="cart-productColor bgBlue"></div>
                                    <span>
                                        <b>Size:</b> 37.5
                                    </span>
                                </div>
                            </div>
                            <div className="cart-priceDetail">
                                <div className="cart-productAmountContainer">
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
                                <div className="cart-productPrice">$ 30</div>
                            </div>
                        </div>
                        <hr className="cart-hr" />
                        <div className="cart-product">
                            <div className="cart-productDetail">
                                <img
                                    src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                                    alt=""
                                    className="cart-img"
                                />
                                <div className="cart-details">
                                    <span>
                                        <b>Product:</b> HAKURA T-SHIRT
                                    </span>
                                    <span>
                                        <b>ID:</b> 93813718293
                                    </span>
                                    <div className="cart-productColor bgRed"></div>
                                    <span>
                                        <b>Size:</b> M
                                    </span>
                                </div>
                            </div>
                            <div className="cart-priceDetail">
                                <div className="cart-productAmountContainer">
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
                                <div className="cart-productPrice">$ 20</div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-summary">
                        <h1 className="cart-summaryTitle">ORDER SUMMARY</h1>
                        <div className="cart-summaryItem ">
                            <span>Subtotal</span>
                            <span>$ 80</span>
                        </div>
                        <div className="cart-summaryItem ">
                            <span>Estimated Shipping</span>
                            <span>$ 50</span>
                        </div>
                        <div className="cart-summaryItem ">
                            <span>Shipping Discount</span>
                            <span>$ -5.90</span>
                        </div>
                        <div type="total" className="cart-summaryItem ">
                            <span>Total</span>
                            <span>$ 80</span>
                        </div>
                        <button className="cart-button">CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
        </>
    );
}
