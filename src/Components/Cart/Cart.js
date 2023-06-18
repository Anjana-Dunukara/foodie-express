import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/Cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasitems = cartCtx.items.length > 0;

  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={onAddHandler.bind(null, item)}
          onRemove={onRemoveHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onclick={props.onclick}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onclick}>
          Close
        </button>
        {hasitems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
