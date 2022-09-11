import {
  FC,
  useCallback,
  useContext,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { AppContext } from "../context/context";
import { ProductType, ShoppingCartProducts } from "../types/types";
import styles from "../styles/CartItems.module.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ShoppingCartProduct, shoppingCartProductsReducer } from "../context/reducer";

export const CartItems: FC = () => {
  const { state } = useContext(AppContext);
  const { shoppingCartProducts } = state;
  let uniqueCartProductsRef = useRef({});
  let prefix = useId();
  let uniqueProducts:ShoppingCartProducts;
  // shoppingCartProducts.length >= 1 && (


  const calledBackUnique = useCallback(() => {
    uniqueCartProductsRef.current = (shoppingCartProducts
      .map((item) => item.id).filter((value, index, self) => self.indexOf(value) === index)).map((id) =>
        shoppingCartProducts.find((obj) => obj.id === id));      
  }, [shoppingCartProducts]);

  calledBackUnique();
  uniqueProducts = uniqueCartProductsRef.current as ShoppingCartProducts;
  console.log(uniqueProducts);
  
  return (
    <div className={styles.CartItems}>
      {(uniqueProducts).map((product: ProductType) => (
        <Card key={prefix + `_${Math.random() + product.id}` + product.name}>
          <CardMedia
            className={styles.images}
            component="img"
            height="140"
            image={`images/${product.image}`}
            alt={`${product.description}`}
          />
          <CardContent>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.price}>{product.price}</p>
            <Typography gutterBottom variant="h5" component="div">
              <h3>{product.name}</h3>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CartItems;
