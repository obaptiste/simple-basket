import { FC, useContext, useId } from "react";
import { AppContext } from "../context/context";
import { ProductType } from "../types/types";
import styles from "../styles/CartItems.module.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";

export const CartItems: FC = (product) => {
  let prefix = useId();
  const { state } = useContext(AppContext);
  const { shoppingCartProducts } = state;
  return (
    <div className={styles.CartItems}>
      {shoppingCartProducts.map((product: ProductType) => (
          <Card key={prefix + `_${Math.random() + product.id}` + product.name}>
            <CardMedia
              className={styles.images}
              component="img"
              height="140"
              image={`../../images/${product.image}`}
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
