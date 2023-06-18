import CartContext from "./Cart-context";
import React, { useReducer } from "react";

const CartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const exsistingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const exsistingCartItem = state.items[exsistingCartItemIndex];
    let updatedItems;

    if (exsistingCartItem) {
      const updatedItem = {
        ...exsistingCartItem,
        amount: exsistingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[exsistingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  } else if (action.type === "REMOVE") {
  } else {
    return defaultCartState;
  }

  if (action.type === "REMOVE") {
    const exsistingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id.id
    );

    const exsistingCartItem = state.items[exsistingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - exsistingCartItem.price;
    let updatedItems;
    if (exsistingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id.id);
    } else {
      const updatedItem = {
        ...exsistingCartItem,
        amount: exsistingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[exsistingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    CartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };

  const cartcontext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
