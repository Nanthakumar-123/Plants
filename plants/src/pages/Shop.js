import React from "react";
import "./Shop.css";
import img11 from "../images/img.11.jpg";
import img12 from "../images/img.12.jpg";
import img13 from "../images/img.13.jpg";
import img2 from "../images/img.2.jpg";
import img3 from "../images/img.3.jpg";
import img4 from "../images/img.4.jpg";
import { FaRegStar } from "react-icons/fa";
import Pro from "../maping/Pro";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../stores/Cartslice";

const Shop = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const addCart = (item) => {
    dispatch(addToCart(item));
  };
  const deleteCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <div className="shop">
        <h1>Shop</h1>
      </div>

      <div className="pros">
        {Pro.map((item) => (
          <div className="pro" key={item.id}>
            <img src={item.img} alt="" />
            <br />
            <br />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />

            <h5>{item.title}</h5>
            <p>{item.discription}</p>
            <p>${item.price}.00</p>

            {cartProducts.find((Item) => Item.id === item.id) ? (
              <button
                onClick={() => {
                  deleteCart(item.id);
                }}
              >
                Remove From Cart
              </button>
            ) : (
              <button
                onClick={() => {
                  addCart(item);
                }}
              >
                Add To Cart
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="ready">
        <h1>Ready to Find your Perfect Plant?</h1>
        <p>
          Browse our online store or visit us in person to <br /> experience the
          beauty of nature.
        </p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Shop;

