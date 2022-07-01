import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

export default function Pay() {
    const KEY =
        "pk_test_51L8Q8cHWMcX7aAbyiasonrrnvtfBKt1rfEO23JoXWi6bIJJt6QErTIz0VWANcKCO9I1v5LtawuuzYZdLzSve8nTm00Wvz0Ycgw";

    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                );
                console.log(res.data);
                navigate("/success");
            } catch (error) {
                console.log(error);
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken, navigate]);
    return (
        <div className="pay-container">
            {stripeToken ? (
                <span>Processing......</span>
            ) : (
                <StripeCheckout
                    name="Five Store"
                    image="https://avatars.githubusercontent.com/u/1486366?v=4"
                    shippingAddress
                    billingAddress
                    description="Your total is $20"
                    amount={2000}
                    token={onToken}
                    stripeKey={KEY}
                >
                    <button className="pay-button">Pay Now</button>
                </StripeCheckout>
            )}
        </div>
    );
}
