import React from "react";
import "./thankyou.css";
import checked_green from "../../../Assets/check_green.png"
import { useMyOrders } from "../../../context/orderContext/ordersContext";

export default function ThankYou() {
    const {orderPlacedInfo} = useMyOrders();
    const handleBackToHome = () => {
        window.location.href = "/"; // Navigates to the homepage and refreshes the page
    };
    return (
        <div className="thanks">
            <div className="thanks_heading">
                <img src={checked_green} alt="" srcset="" />
                <h1>Thank You</h1>
            </div>
            
            <h3>Your Order Has Been Placed Successfully</h3>
            <div className="order_number">
                <div className="order_number_head">
                    Your Order Number is
                </div>
                <div className="order_number_value">
                    ORDER-{orderPlacedInfo?.orderNumber}
                </div>
            </div>

            <div className="shipping_details_ty">
                <div className="shipping_details_row">
                    <div className="shipping_details_ty_label">Full Name</div>
                    <div className="shipping_details_ty_value">{orderPlacedInfo?.billing.first_name} {orderPlacedInfo?.billing.first_name}</div>
                </div>
                <div className="shipping_details_row">
                    <div className="shipping_details_ty_label">Email</div>
                    <div className="shipping_details_ty_value">{orderPlacedInfo?.billing.email} </div>
                </div>
                <div className="shipping_details_row">
                    <div className="shipping_details_ty_label">Phone</div>
                    <div className="shipping_details_ty_value">{orderPlacedInfo?.billing.phone} </div>
                </div>
                <div className="shipping_details_row">
                    <div className="shipping_details_ty_label">Address</div>
                    <div className="shipping_details_ty_value">{orderPlacedInfo?.billing.address_1}</div>
                </div>
            </div>

            <button className="back_to_home" onClick={handleBackToHome}>
                Back to Home
            </button>

        </div>
    )
}