import React from "react";
import ProductsGrid from "../components/Products";

const Home: React.FC = ():JSX.Element => {
  return (
    <>
      <h2>Products</h2>
      <ProductsGrid />
    </>
  );
};

export default Home;
