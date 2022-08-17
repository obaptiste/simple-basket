import { ReactNode } from "react";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        payload: any;
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Create = "CREATE_PRODUCT",
  Delete = "DELETE_PRODUCT",
  Add = "ADD_PRODUCT",
}

export type ProductType = {
  id: number;
  name: string;
  price: number;
  image?: string;
  description?: string;
  quantity?: number;
  category?: string;
};

export type ShoppingCartProducts = {
  [x: string]: ReactNode;
  id: number;
  name: string;
  price: number;
}[];


export type ShoppingCartProduct =
  ShoppingCartProducts[keyof ShoppingCartProducts];

type ProductPayLoad = {
  [Types.Create]: {
    id: number;
    name: string;
    price: number;
  };
  [Types.Delete]: {
    id: number;
  };
};

export type ProductActions =
  ActionMap<ProductPayLoad>[keyof ActionMap<ProductPayLoad>];

export const productReducer = (
  state: ProductType[],
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Types.Create:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
        },
      ];
    case Types.Delete:
      return [...state.filter((product) => product.id !== action.payload.id)];
    default:
      return state;
  }
};

type ShoppingCartPayLoad = {
  [Types.Add]: undefined;
};

export type ShoppingCartActions =
  ActionMap<ShoppingCartPayLoad>[keyof ActionMap<ShoppingCartPayLoad>];

export const shoppingCartReducer = (
  state: number,
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Types.Add:
      return state + 1;
    default:
      return state;
  }
};

type ShoppingCartProductsPayload = {
  [Types.Add]: undefined;
};

export type ShoppingCartProductsActions =
  ActionMap<ShoppingCartProductsPayload>[keyof ActionMap<ShoppingCartProductsPayload>];

export const shoppingCartProductsReducer = (
  state: ShoppingCartProducts,
  action: ProductActions | ShoppingCartProductsActions
) => {
  switch (action.type) {
    case Types.Add:
      return [
        ...state,
        {
          id: action.payload.product.id,
          name: action.payload.product.name,
          price: action.payload.product.price,
        },
      ];
    default:
      return state;
  }
};
