import React, { FC, useContext } from "react";
import { AppContext } from "../context/context";
import { Types } from "../context/reducer";
import { ProductType } from "../types/types";
import Card from '@mui/material/Card';

import Button from '@mui/material/Button';

import styles from "../styles/Products.module.scss";

interface productButtonProps {
  product: ProductType;
}

export const ProductButton = (product: productButtonProps) => {
  const { dispatch } = useContext(AppContext);

  return (
    <>
       <Button variant="outlined"
        onClick={() => {
          dispatch({
            type: Types.Add,
            payload: product,
          });
          console.log(product.product.id);
        }}
      >
        click
      </Button>
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
              <div style={{backgroundImage:`url('/public/images/${product.image}')`}}>

              <h2>{product.name}</h2>
              <div>{product.description}</div>
              <span>{product.price}</span>
              <ProductButton product={product} />
              </div>
            </li>
          );
        })}
      </div>
    );
  };

  return <ProductsGrid />;
};

export default Products;
