import { ReactNode } from "react";

export type ProductType = {
    id: number;
    name: string;
    price: number;
    image?: string;
    description?: string;
    quantity?: number;
    category?: string;
  };

 export type InitialStateType = {
    products: ProductType[];
    shoppingCart: number;
    shoppingCartProducts: ShoppingCartProducts;  // products in shopping cart
  };

  export type ShoppingCartProducts = {
    [x: string]: ReactNode;
    id: number;
    name: string;
    description?: string;
    image: string;
    price: number;
  }[];
  