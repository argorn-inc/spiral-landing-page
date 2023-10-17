import React from 'react';
import styles from "../styles/HeroSection.module.css";
import { homeText } from '@/constant/text';
import Image from 'next/image';

const HeroSection = ({toggleWaitListModal}) => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.heroSec__left}>
                <p className={styles.heroSec__leftLargeTxt}>
                    {homeText.heroLgTxt1}
                    <span style={{ color: '#0095A8' }} className={styles.heroSec__leftLargeTxt}>
                        {homeText.heroLgTxt2}
                    </span>
                </p>
                <p style={{ color: '#0095A8', marginTop: '-20px' }} >
                    <span>
                        {homeText.heroSmTxt}
                    </span>
                </p>

                <div className={styles.download}>
                    <p>DOWNLOAD APP NOW</p>
                    <div className={styles.download__bottons}>
                        <Image
                            src='/assets/playstore.svg'
                            width={200}
                            height={400}
                            alt=''
                            onClick={()=>toggleWaitListModal('android')}
                        />
                        <Image
                            src='/assets/appstore.svg'
                            width={200}
                            height={400}
                            alt=''
                            onClick={()=>toggleWaitListModal('ios')}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.heroSec__right}>
                    <div className={`${styles.iPhones}`}>
                    <div className={styles.iPhones__wrapper}>
                        <Image
                            src='/assets/phoneHeroLg.png'
                            width={614}
                            height={754}
                            alt=''
                        />
                    </div>
                </div>
                <div className={styles.gradient__box}>
                    <div className={styles.heroSec__rightGradient} />
                </div>
            </div>
            <div className={`${styles.download} ${styles.download__sm}`}>
                <p>DOWNLOAD APP NOW</p>
                <div className={styles.download__bottons}>
                    <Image
                        src='/assets/playstore.svg'
                        width={200}
                        height={400}
                        alt=''
                        onClick={()=>toggleWaitListModal('android')}
                    />
                    <Image
                        src='/assets/appstore.svg'
                        width={200}
                        height={400}
                        alt=''
                        onClick={()=>toggleWaitListModal('ios')}
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection