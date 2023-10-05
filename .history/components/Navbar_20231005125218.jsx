import React from 'react';
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <p>Logo</p>
        <div>
            <p>About</p>
            <p>Features</p>
            <p>Contact</p>
            <button></button>
        </div>
    </div>
  )
}

export default Navbar