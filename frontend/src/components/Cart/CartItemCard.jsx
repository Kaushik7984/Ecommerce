import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";
import { removeItemFromCart } from "../../actions/cartAction";

const CartItemCard = ({ item, deleteCartItems}) => {
  return (
    <div className="CartItemCard">
      
      <img src={item.image} alt="not show!" />
      <div>
       
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: ₹${item.price}`}</span>
        <p onClick={() => deleteCartItems(item.product)}>Remove</p>
      </div>
    </div>
  );
};

export default CartItemCard;