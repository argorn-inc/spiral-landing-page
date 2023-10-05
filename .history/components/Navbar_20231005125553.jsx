import React from 'react';
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <p>Logo</p>
            <div className={styles.navbar__right}>
                <p>About</p>
                <p>Features</p>
                <p>Contact</p>
                <button type='b' aria-label='for authors'>For Authors</button>
            </div>
        </div>
    )
}

export default Navbar