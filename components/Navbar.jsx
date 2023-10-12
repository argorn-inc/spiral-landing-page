'use client'
import React, { useState } from 'react';
import styles from "../styles/Navbar.module.css";
import Image from 'next/image';
import { Close, Menu } from '@mui/icons-material';
import { IconButton, Drawer } from '@mui/material';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen((prev) => !prev);
    };

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

            <IconButton className={`${styles.menuIcon} ${isDrawerOpen && styles.hideMenuIcon}`} onClick={toggleDrawer}>
                <Menu style={{ height: '38px', width: '38px' }} />
            </IconButton>

            <div className={styles.navbar__right}>
                <p>About</p>
                <p>Features</p>
                <p>Contact</p>
                <button type='button' aria-label='for authors'>For Authors</button>
            </div>

            <Drawer hideBackdrop={true} PaperProps={{ style: { marginTop: '85px' } }} anchor="top" open={isDrawerOpen} onClose={toggleDrawer}>
                {isDrawerOpen && <IconButton className={`${styles.menuIcon} ${styles.closeIcon}`} onClick={toggleDrawer}>
                    <Close style={{ height: '38px', width: '38px' }} />
                </IconButton>}
                <div className={styles.drawerContent}>
                    <p>About</p>
                    <p>Features</p>
                    <p>Contact</p>
                    <button type='button' aria-label='for authors'>For Authors</button>
                </div>
            </Drawer>
        </div>



    );
};

export default Navbar;
