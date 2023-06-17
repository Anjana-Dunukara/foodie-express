import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onclick={props.onclick}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.65</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onclick}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
