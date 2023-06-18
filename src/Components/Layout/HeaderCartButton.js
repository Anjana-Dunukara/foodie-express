import React, { useContext, useEffect, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/Cart-context";

const HeaderCartButton = (props) => {
  const [btnHighlight, setBtnhighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnhighlighted(true);

    const timer = setTimeout(() => {
      setBtnhighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnbump = `${styles.button} ${btnHighlight ? styles.bump : ""}`;

  return (
    <button className={btnbump} onClick={props.onclick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
