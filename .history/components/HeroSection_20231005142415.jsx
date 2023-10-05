import React from 'react';
import styles from "../styles/HeroSection.module.css";
import { homeText } from '@/constant/text';

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.heroSec__left}>
                <p className={styles.heroSec__leftLargeTxt}>
                   homeText.l
                </p>
                <span>
                   
                </span>
            </div>
            <div className={styles.heroSec__right}>
                <p>IMAGE</p>
            </div>
        </div>
    )
}

export default HeroSection