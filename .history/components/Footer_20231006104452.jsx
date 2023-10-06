import React from 'react';
import styles from '../styles/Footer.module.css';
import {
    Facebook, Twitter,
    Instagram,
    Youtube,
    Mail,
    Call,
    Copyright
} from "@mui/icons-material";
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.footer}>
            {/* <div className={styles.contact__us}>
                <div className={styles.contact__usLeft}>
                    <a
                        href="mailto:info@youremail.com"
                        aria-label="Email"
                    >
                        <p>  <Mail className={styles.contact__usIcon} /></p>
                        <p>info@youremail.com</p>
                    </a>
                </div>
                <hr className={styles.contact__usDivider} />
                <div className={styles.contact__usRight}>
                    <a
                        href="tel:+233546353625"
                        aria-label="Email"
                    >
                        <p><Call className={styles.contact__usIcon} /> </p>
                        <p>+233 54 635 3625</p>
                    </a>
                </div>
            </div> */}
            <div className={styles.footer__content}>
                {/* <Image
                    src='/assets/spiralLogo.svg'
                    width={227}
                    height={74}
                    alt='Spiral Logo'
                />

                <p>Spiral - Nurturing Your Soul, One Devotion at a Time.</p> */}

                <div className={styles.media__handles}>
                    <Facebook className={styles.mediaIcons} /> <hr />
                    <Instagram className={styles.mediaIcons} /> <hr />
                    <Twitter className={styles.mediaIcons} /> <hr />
                    <Youtube className={styles.mediaIcons} />
                </div>
            </div>

            <p>  <hr className={styles.footer__bottomDivider} /></p>
            <div className={styles.footer__bottom}>

                <p>
                    
                    Copyright 2023 Spiral. All Right Reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer