import { FC, useCallback, useContext, useId, useMemo, useState } from "react";
import { AppContext } from "../context/context";
import { ProductType, ShoppingCartProducts } from "../types/types";
import styles from "../styles/CartItems.module.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ShoppingCartProduct, ShoppingCartProductsActions, shoppingCartProductsReducer } from "../context/reducer";

export const CartItems: FC = (product) => {
  let prefix = useId();
  const { state } = useContext(AppContext);
  const { shoppingCartProducts } = state;
  const [prods, setProds] = useState();
  let runningTotal;

// shoppingCartProducts.length >= 1 && (
   const useRunningTotal: any = async (shoppingCartProducts: ShoppingCartProducts) => { useMemo(() => shoppingCartProducts?.map((item: { price: any; }) => item.price).reduce((previousValue: any, currentValue: any) => previousValue + currentValue),[shoppingCartProducts])

   
   }

const UniqueProductFilter = useCallback(
  (shoppingCartProducts:ShoppingCartProducts) => {
    let prods = shoppingCartProducts!.map(item => item.id).filter((value, index, self) => { 
    return self.indexOf(value) === index}) 
    setProds(() => prods +=prods as any)
  },
  [])
  

//  const total = useRunningTotal(shoppingCartProducts);
//  console.log(total);
   const uniqueProducts = prods;

  console.log(uniqueProducts)


  return (
    <div className={styles.CartItems}>
      {shoppingCartProducts.map((product: ProductType) => (
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
