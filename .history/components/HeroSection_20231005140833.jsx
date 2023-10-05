import React from 'react';
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
    return (
        <div className={styles.}>
            <div className={styles.heroSec__left}>
                <p className={styles.heroSec__leftLargeTxt}>
                    Nurturing Your Soul, One Devotion at a Time
                </p>
            </div>
            <div className={styles.heroSec__right}>

            </div>
        </div>
    )
}

export default HeroSection