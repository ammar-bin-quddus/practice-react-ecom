import React, { useState } from "react";
import Nav from "./Nav";
import AllProducts from "./AllProducts";
import CartContainer from "./CartContainer";

const App = () => {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });

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

  // console.log(isActive);

  return (
    <>
      <Nav />
      <div className="w-11/12 mt-8 mx-auto flex gap-6">
        <AllProducts />
        <CartContainer isActive={isActive} handleIsActive={handleIsActive} />
      </div>
    </>
  );
};

export default App;