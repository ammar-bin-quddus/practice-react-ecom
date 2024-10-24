import React from "react";
import Cart from "./components/Cart";
import About from "./components/About";

const CartContainer = ({ handleIsActive, isActive }) => {
  return (
    <div className="w-1/3">
      <p>Cart Container</p>
      <div className="mt-8 flex justify-between">
        <div
          onClick={() => handleIsActive('cart')}
          className={
            isActive.cart
              ? "active border-2 px-5 py-2 text-lg rounded-md cursor-pointer"
              : "border-2 px-5 py-2 text-lg rounded-md cursor-pointer"
          }
        >
          <p>Cart</p>
        </div>
        <div
          onClick={() => handleIsActive('about')}
          className={
            isActive.cart
              ? "border-2 px-5 py-2 text-lg rounded-md cursor-pointer"
              : "active border-2 px-5 py-2 text-lg rounded-md cursor-pointer"
          }
        >
          <p>About</p>
        </div>
      </div>
      {isActive.status === "cart" ? <Cart /> : <About />}
    </div>
  );
};

export default CartContainer;
