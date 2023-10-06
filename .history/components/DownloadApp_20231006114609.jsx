import React from 'react';
import { homeText } from '@/constant/text';
import styles from '../styles/DownloadApp.module.css'
import Image from 'next/image';

const DownloadApp = () => {
    return (
        <div className={styles.downloadApp}>

            <div className={styles.downloadApp__left}>
                <div className={styles.left__text}>
                    <p>{homeText.downloadAPP_lgTxt}</p>
                    <span>{homeText.downloadAPP_smTxt}</span>
                </div>
                <div className={styles.download__bottons}>
                    <Image
                        src='/assets/playstore.svg'
                        width={200}
                        height={400}
                        alt='play store'

                    />
                    <Image
                        src='/assets/appstore.svg'
                        width={200}
                        height={400}
                        alt='app store'
                    />

                </div>

            </div>

            <div className={styles.downloadApp__right}>
                <div className={styles.happyUserImage__wrapper}>
                    <Image
                        src='/assets/happyUser.png'
                        width={ 474}
                        height={417}
                        alt='happy user'
                        className={styles.happyUserImage}
                    />
                </div>
                <Image
                    src='/assets/Prayer.svg'
                    width={250}
                    height={600}
                    alt='prayer'
                    className={styles.prayerPhone}
                />
            </div>
        </div>
    )
}

export default DownloadApp