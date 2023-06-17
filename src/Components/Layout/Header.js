import React, { Fragment } from "react";
import foodimg from "../../Assests/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>FoodieExpress</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={foodimg} alt="Table full of food!" />
      </div>
    </Fragment>
  );
};

export default Header;
