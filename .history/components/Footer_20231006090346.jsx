import React from 'react';
import styles from '../styles/Footer.module.css';
import {
    Facebook, Twitter,
    Instagram,
    Youtube
} from "@mui/icons-material";
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__content}>
                <Image
                    className={styles.iPhone13}
                    src='/assets/ispiralLogo.svg'
                    width={300}
                    height={400}
                    alt='Spiral Logo'
                />

                <p>Spiral - Nurturing Your Soul, One Devotion at a Time.</p>

                <div className={styles.media__handles}>
                    <Facebook /> |
                    <Instagram /> |
                    <Twitter /> |
                    <Youtube />
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