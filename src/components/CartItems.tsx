import { FC, useContext, useId } from "react";
import { AppContext } from "../context/context";
import { ProductType } from "../types/types";
import ProductCard from "./ProductCard";
import styles from "../styles/CartItems.module.css";

export const CartItems: FC = (product) => {
  let prefix = useId();
  const { state } = useContext(AppContext);
  const { shoppingCartProducts } = state;
  return (
    <div className={styles.cartItems}>
      {shoppingCartProducts.map((product: ProductType) => (
        <ProductCard product={product} key={prefix+`_${Math.random() + product.id}`+product.name} />
      ))}
    </div>
  );
};

export default CartItems;
