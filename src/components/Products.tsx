import React, { FC, useContext, useId } from "react";
import { AppContext } from "../context/context";
import ProductCard  from "./ProductCard";

import styles from "../styles/Products.module.scss";



const Products = () => {
  let prefix = useId();
  const { state } = useContext(AppContext);
  const { products } = state;

  const ProductsGrid: FC = (props) => {
    return (
      <div className={styles.productGrid}>
       
        {products.map((product) => {
          return (
            <ProductCard product={{ ...product}} key={prefix+ `_${product.id}`} />
          );
        })}
      </div>
    );
  };

  return <ProductsGrid />;
};

export default Products;
