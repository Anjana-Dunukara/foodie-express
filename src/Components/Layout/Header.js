import React, { Fragment } from "react";
import foodimg from "../../Assests/meals.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>FoodieExpress</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={foodimg} alt="Table full of food!" />
      </div>
    </Fragment>
  );
};

export default Header;
