import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__content}>
                <h1>Logo</h1>
                <p>Spiral - Nurturing Your Soul, One Devotion at a Time.</p>

                <div className={styles.media__handles}>
                    <Facebook /> | 
                    <Instagram /> | 
                    <Footer /> |
                    <
                </div>
            </div>
            <hr />
            <p>
                {/* <  */}
                Copyright 2023 Spiral. All Right Reserved.
            </p>
        </div>
    )
}

export default Footer