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
            <div className={styles.contact__us}>
<div className={styles.contact__usLeft}>
            </div>
            <div className={styles.footer__content}>
                <Image
                    className={styles.iPhone13}
                    src='/assets/spiralLogo.svg'
                    width={227}
                    height={74}
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