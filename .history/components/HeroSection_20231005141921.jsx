import React from 'react';
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.heroSec__left}>
                <p className={styles.heroSec__leftLargeTxt}>
                    Nurturing Your Soul, One Devotion at a Time
                </p>
                <span>
                    Explore a world of spirituality, community, and enlightenment right at your fingertips.
                    Elevate your daily devotion with Spiral, the mobile app designed to enrich your spiritual journey.
                </span>
            </div>
            <div className={styles.heroSec__right}>
                <p>IMAGE</p>
            </div>
        </div>
    )
}

export default HeroSection