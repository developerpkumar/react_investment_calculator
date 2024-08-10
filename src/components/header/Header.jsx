import React from "react";
import logo from "../../images/moneyBag.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <img src={logo} alt="logo" className={styles.logo}></img>
      <h1 className={styles.title}>Investment Calculator</h1>
    </div>
  );
}

export default Header;
