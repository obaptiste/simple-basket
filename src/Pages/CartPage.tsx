import React, { lazy, Suspense } from "react";
const CartItems = lazy(() => import("../components/CartItems"));

const CartPage: React.FC = (): JSX.Element => {
  return (
    <Suspense>
        <h1>CartPage</h1>
        <CartItems />
    </Suspense>
  );
};

export default CartPage;
