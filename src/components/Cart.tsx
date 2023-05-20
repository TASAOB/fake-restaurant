import React from "react";
import { Button } from "react-bootstrap";
import "./Cart.css";

const Cart: React.FC = () => {
  return (
    <section>
      <h2>Cart</h2>
      <div className="cart-container">
        <p>Your cart is currently empty.</p>
        <Button variant="primary">Checkout</Button>
      </div>
    </section>
  );
};

export default Cart;
