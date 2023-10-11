import React from 'react';
import styles from "../styles/Navbar.module.css";
import Image from 'next/image';
import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo__container}>
                <Image
                    className={styles.logo}
                    src='/assets/logo.svg'
                    width={227}
                    height={74}
                    alt='Spiral Logo'
                />
            </div>
            <div className={styles.navbar__right}>
                <p>About</p>
                <p>Features</p>
                <p>Contact</p>
                <button type='button' aria-label='for authors'>For Authors</button>
            </div>
            <IconButton className={styles.menuIcon}>
                 <Menu style={{height:'38px', width:'38px'}} />
                 </IconButton>
        </div>
    )
}

export default Navbar