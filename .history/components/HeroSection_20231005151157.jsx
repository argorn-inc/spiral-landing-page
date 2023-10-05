import React from 'react';
import styles from "../styles/HeroSection.module.css";
import { homeText } from '@/constant/text';

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.heroSec__left}>
                <p className={styles.heroSec__leftLargeTxt}>
                    {homeText.heroLgTxt}
                </p>
                <span>
                    {homeText.heroSmTxt}
                </span>

                <div className={styles.download}>
                    <p>DOWNLOAD APP NOW</p>
                </div>
            </div>
            <div className={styles.heroSec__right}>
                <p>IMAGE</p>

                <div className={styles.heroSec__rightGradient} />
            </div>
        </div>
    )
}

export default HeroSection