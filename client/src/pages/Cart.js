import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoIosRemoveCircle, IoMdAddCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import { userRequest } from "../utils/request";

import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51LGlQtAf4i7Q4Y45jGU0FxaE0GYEjcAVCM07xHOlz8XyVtP1FxvVCXz8va8nTxocOWFJ5MWPCdKRHjjjQA3EkYkc000Fp2YV58";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);

  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate("/success", {
          // stripeData: res.data,
          // products: cart,
          data: res.data,
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate, cart.total]);
  return (
    <>
      <Navbar />
      <Announcement />
      <div className="cart-wrapper">
        <h1 className="cart-title">YOUR BAG</h1>
        <div className="cart-top">
          <Link to="/">
            <button className="cart-topButton">CONTINUE SHOPPING</button>
          </Link>

          <div className="cart-topText">Shopping Bag (2)</div>
          <div className="cart-topText">Your Wishlist (0)</div>
          <button type="filled" className="cart-topButton">
            CHECKOUT NOW
          </button>
        </div>
        <div className="cart-bottom">
          <div className="cart-info">
            {cart.products.map((product) => (
              <div className="cart-product">
                <div className="cart-productDetail">
                  <img className="cart-img" src={product.img} alt="" />
                  <div className="cart-details">
                    <span>
                      <b>Product:</b> {product.title}
                    </span>
                    <div className="cart-colorContainer">
                      <b>Color: </b>
                      <div
                        className={`cart-productColor bg${product.color}`}
                      ></div>
                    </div>

                    <span>
                      <b>Size:</b> {product.size}
                    </span>
                  </div>
                </div>
                <div className="cart-priceDetail">
                  <div className="cart-productAmountContainer">
                    <button className="border normal" onClick="">
                      <IoIosRemoveCircle />
                    </button>

                    <span className="detail-amount">{product.quantity}</span>
                    <div className="border normal" onClick="">
                      <IoMdAddCircle />
                    </div>
                  </div>
                  <div className="cart-productPrice">
                    $ {product.price * product.quantity}
                  </div>
                </div>
              </div>
            ))}

            <hr className="cart-hr" />
          </div>
          <div className="cart-summary">
            <h1 className="cart-summaryTitle">ORDER SUMMARY</h1>
            <div className="cart-summaryItem ">
              <span>Subtotal</span>
              <span>$ {cart.total}</span>
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
              <span>$ {cart.total}</span>
            </div>
            <StripeCheckout
              name="Five Store"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              shippingAddress
              billingAddress
              description="Your total is $20"
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <button className="cart-button">CHECKOUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </>
  );
}
