import { FC, useContext } from "react";
import { AppContext } from "../context/context";
import { ProductType } from "../context/reducer";

export const CartItems: FC = (product) => {
  const { state } = useContext(AppContext);
  const { shoppingCartProducts } = state;
  return (
    <div className="cart-items">
      {shoppingCartProducts.map((product: ProductType) => (
        <div
          className="cart-item"
          key={product.id}
          style={
            { backgroundImage: `url:('/public/images/${product.image}')` } ?? ""
          }
        >
          <div className="cart-item-name">{product.name}</div>
          <div className="cart-item-price">{product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
