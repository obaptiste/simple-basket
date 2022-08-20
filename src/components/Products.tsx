import React, { FC, useContext } from "react";
import { AppContext } from "../context/context";
import { ProductType, Types } from "../context/reducer";
import styles from "../styles/Products.module.scss";

interface productButtonProps {
  product: ProductType;
}

export const ProductButton = (product: productButtonProps) => {
  const { dispatch } = useContext(AppContext);

  return (
    <>
      <button
        onClick={() => {
          dispatch({
            type: Types.Add,
            payload: product,
          });
          console.log(product.product.id);
        }}
      >
        click
      </button>
    </>
  );
};
const Products = () => {
  const { state } = useContext(AppContext);
  const { products } = state;

  const ProductsGrid: FC = (props) => {
    return (
      <div className={styles.productGrid}>
        {products.map((product) => {
          return (
            <li className={styles.productCard} key={Math.random() + product.id}>
              <h2>{product.name}</h2>
              <div>{product.description}</div>
              <span>{product.price}</span>
              <ProductButton product={product} />
            </li>
          );
        })}
      </div>
    );
  };

  return <ProductsGrid />;
};

export default Products;
