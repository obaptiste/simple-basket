import React, { useContext } from "react";
import { AppContext } from "../context/context";

export const CartButton = () => {
  const { state } = useContext(AppContext);
  const { shoppingCart } = state;
  return <span>{shoppingCart}</span>;
};

export default CartButton;
