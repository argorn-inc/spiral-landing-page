import React from 'react';
import styles from "../styles/HeroSection.module.css";
import { homeText } from '@/constant/text';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.heroSec__left}>
                <p className={styles.heroSec__leftLargeTxt}>
                    {homeText.heroLgTxt}
                </p>
                <p>
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
                        />
                        <Image
                            src='/assets/appstore.svg'
                            width={200}
                            height={400}
                            alt=''
                        />
                    </div>
                </div>
            </div>
            <div className={styles.heroSec__right}>
                <div className={styles.iPhones}>
                    <Image
                     className={styles.iPhone13}
                        src='/assets/iPhone13.svg'
                        width={300}
                        height={400}
                        alt=''
                    />
                    <Image
                    className={styles.iPhone133}
                        src='/assets/iPhone133.svg'
                        width={300}
                        height={400}
                        alt=''
                    />
                    
                </div>

               
            </div>
        </div>
    )
}

export default HeroSection