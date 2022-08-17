import React, {useContext, Suspense} from "react";
import { AppContext } from "../context/context";
import { ProductType } from "../context/reducer";

 class product {
  static image: any;
  constructor(
    public name: string,
    public price: number,
    public description: string,
    public image: string
  ) {}
}

// const basketProduct = {
//     backgroundImage: `url(/images/${product.image}))` ?? "",
// }
// } as unknown as CSSStyleRule

const CartPage: React.FC = ():JSX.Element => {
const { state } = React.useContext(AppContext);
const {shoppingCartProducts} = state;


console.log(shoppingCartProducts);

const CartItems: React.FC = (product) => {

    return (
        <div className="cart-items">
            {shoppingCartProducts.map((product: ProductType) => (
                <div className="cart-item" key={product.id} style={{ backgroundImage: `url:('/public/images/${product.image}')` } ?? ''}>
                    <div className="cart-item-name">{product.name}</div>
                    <div className="cart-item-price">{product.price}</div>
                </div>
            ))}
        </div>
    )
} 

return (
        <>
        <h1>CartPage</h1>
        <CartItems />
        </>
    );
}

export default CartPage;
