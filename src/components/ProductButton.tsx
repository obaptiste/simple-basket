import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/context";
import { Types } from "../context/reducer";
import { ProductType } from "../types/types";

export interface productButtonProps {
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
          Add to basket
        </Button>
      </>
    );
  };