import React, { useState } from "react";
import Nav from "./Nav";
import AllProducts from "./AllProducts";
import CartContainer from "./CartContainer";

const App = () => {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });

  const [showCart, setShowCart] = useState([]);

  const handleIsActive = (status) => {
    if (status === "cart") {
      setIsActive({
        cart: true,
        status: "cart",
      });
    } else {
      setIsActive({
        cart: false,
        status: "about",
      });
    }
  };

  const handleShowCart = (product) => {
    const isExist = showCart.find((cart) => cart.title === product.title);

    if (isExist) {
      alert("already exists");
    } else {
      const newCartArray = [...showCart, product];
      setShowCart(newCartArray);
    }
  };

  //console.log(showCart);

  // console.log(isActive);

  return (
    <>
      <Nav />
      <div className="w-11/12 mt-8 mx-auto flex gap-6">
        <AllProducts handleShowCart={handleShowCart} />
        <CartContainer showCart={showCart} isActive={isActive} handleIsActive={handleIsActive} />
      </div>
    </>
  );
};

export default App;
