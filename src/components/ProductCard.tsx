import React from "react";
import styles from "../styles/ProductCard.module.sass";
import { ProductType } from "../types/types";
import { ProductButton } from "./ProductButton";

interface ProductCardProps {
  product: ProductType;
  className?: string;
}

export const ProductCard = (props: ProductCardProps) => {
  const { id, name, description, price, image } = props.product;
  return (
    <div
      className={styles.ProductCard}
      style={{ backgroundImage: `url('../images/${image}')` }}
    >
      <h2>{name}</h2>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
      <span>£{price}</span>
      <ProductButton product={{ id, name, price }} />
    </div>
  );
};

export default ProductCard;
