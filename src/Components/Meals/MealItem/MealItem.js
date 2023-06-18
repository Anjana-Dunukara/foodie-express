import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import React, { useContext } from "react";
import CartContext from "../../../store/Cart-context";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const onAddtoCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.title}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={onAddtoCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
